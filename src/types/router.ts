export type RouteMeta = {
  title?: string;
  breadcrumb?: string;
  requiresAuth?: boolean;
};

export type RouteHandle = {
  meta?: RouteMeta;
};
