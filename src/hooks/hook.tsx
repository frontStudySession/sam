// import { routerContext } from '@app/routes/Router';
// import React, { useContext, useCallback } from 'react';
// export const useRouter = () => {
//   function push(to: string) {
//     console.log('hook', to);
//     return history.pushState(null, '', to);
//   }
//   return { push };
// };

// export const useNavigate = () => {
//   // 컨택스트를 가져온다
//   const { pathname, changePath } = useContext(routerContext);
//   const navigate = useCallback(
//     (nextPath: string) => {
//       // 이전 주소와 이동할 주소가 같으면 멈춘다.
//       if (pathname === nextPath) {
//         return;
//       }

//       // 주소를 변경한다
//       changePath(nextPath);
//     },
//     [pathname, changePath]
//   );

//   return navigate;
// };
export default {};
