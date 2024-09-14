interface Window {
  Webflow?: {
    require(module: string): {
      init(options?: any): void;
    };
  };
}
