import { useEffect, useState } from 'react';
import { hookRegistry, HookName, type HookContext } from '@salla.sa/twilight-theme-engine/hooks';
import type { Product } from '@salla.sa/twilight-theme-engine/types';
import { useTranslation } from '@salla.sa/twilight-theme-engine/i18n';
import { AddProductToast } from '../components/cart';
import { LatestProducts } from '../components/home';
import { DigitalFilesSettings } from '../components/product';

/**
 * The store's home blocks are merchant-owned and can leave the page with only
 * a hero and categories. This fallback guarantees the abaya grid every
 * storefront needs, at the end of the page, without duplicating a product
 * grid the merchant already placed above it.
 */
function HomeLatestFallback() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.querySelector('#main-content .s-product-card')) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <section className="s-block s-block--latest-products container">
      <LatestProducts data={{ title: t('theme.home.new_arrivals', 'New Arrivals') }} />
    </section>
  );
}

export function registerThemeHooks() {
  // Register AddProductToast at body:end hook slot. Default on (twilight.json
  // ships the setting `"value": true`); only an explicit `false` turns it off.
  hookRegistry.register(
    HookName.BODY_END,
    (context: HookContext) => {
      const { twilight } = context;
      if (twilight?.theme?.settings?.enable_add_product_toast === false) return null;
      return <AddProductToast />;
    },
    50
  );

  // Register DigitalFilesSettings at product:single.description hook slot
  // Receives product from ProductDetails via context prop
  hookRegistry.register(
    HookName.PRODUCT_DESCRIPTION,
    (context: HookContext) => {
      const { product } = context as { product?: Product };
      if (!product?.digital_files_settings) return null;
      return <DigitalFilesSettings {...product.digital_files_settings} />;
    },
    50
  );

  // Always leave the home page with a product grid, even when the merchant has
  // configured only a hero / category blocks.
  hookRegistry.register(HookName.HOME_END, () => <HomeLatestFallback />, 50);
}
