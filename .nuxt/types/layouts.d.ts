import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "login"
declare module "D:/webdir/git_jasonsn/znuxtjs/nuxt3-edu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}