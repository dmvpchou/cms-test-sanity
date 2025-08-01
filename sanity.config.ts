import {defineConfig, isDev} from 'sanity'

import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

import {visionTool} from '@sanity/vision'
// 移除不相容的插件 import
// import {colorInput} from '@sanity/color-input'
// import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
// import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import Navbar from './components/studio/Navbar'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'sota',

  projectId: '3ut6e43v',
  dataset: 'sota',

  plugins: [
    structureTool({structure}),
    // 移除不相容的插件
    // colorInput(),
    // imageHotspotArrayPlugin(),
    customDocumentActions(),
    // media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  // 移除 media 相關的 form 設定
  // form: {
  //   file: {
  //     assetSources: (previousAssetSources) => {
  //       return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
  //     },
  //   },
  //   image: {
  //     assetSources: (previousAssetSources) => {
  //       return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
  //     },
  //   },
  // },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})