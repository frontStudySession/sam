export const useRouter = () => {
  function push(to: string) {
    return history.pushState(null, '', to);
  }
  return { push };
};
