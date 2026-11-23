import { route, type VirtualRouteNode } from '@tanstack/virtual-file-routes';

// The storefront has no journal. Override the engine's `/blog` page with a
// redirect to the home page. Add other custom or overriding routes here.
export const routes: VirtualRouteNode[] = [route('/blog', 'blog-disabled.tsx')];
