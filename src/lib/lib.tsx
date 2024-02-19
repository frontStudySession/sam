export const changeRouter = (pathname: string) => {
  console.log('?', pathname);
  return window.history.pushState(null, '', pathname);
};
