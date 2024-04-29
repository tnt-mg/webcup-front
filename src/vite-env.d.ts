/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly REMOTION_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
