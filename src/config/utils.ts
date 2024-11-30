import { useRouter } from 'vue-router'


// 获取assets静态资源
export const getAssetsFile = (url: any, flag: any = false) => {
  const imgUrl: any = new URL(`../assets/${url}`, import.meta.url).href
  if (flag) {
    return {
      backgroundImage: `url(${imgUrl})`
    }
  } else {
    return imgUrl
  }
}

//路由跳转
export default function useRouterNavigation() {
  const router = useRouter();

  function navigateTo(path: string, isNewPage: boolean = false) {
    if (isNewPage) {
      window.open(path)
    } else {
      router.push(path)
    }
  }

  return { navigateTo }
}