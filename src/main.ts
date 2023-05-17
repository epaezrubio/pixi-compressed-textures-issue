import './style.css'

import { Application } from '@pixi/app';
import { Assets } from '@pixi/assets';
import { Sprite } from '@pixi/sprite';

import '@pixi/compressed-textures';
import '@pixi/spritesheet';

const app = new Application<HTMLCanvasElement>()

Assets.add('texture', [
  {
    alias: ['ktx-texture'],
    src: 'test-image-ktx.ktx',
  },
  // {
  //   alias: ['dds-texture'],
  //   src: 'test-image-dds.dds',
  // },
]);

Assets.add('atlas', [
  // {
  //   alias: ['png-atlas'],
  //   src: 'test-atlas-png.json',
  // },
  {
    alias: ['ktx-atlas'],
    src: 'test-atlas-ktx.json',
  },
  // {
  //   alias: ['dds-atlas'],
  //   src: 'test-atlas-dds.json',
  // },
]);

await Promise.all([
  Assets.load('texture'),
  Assets.load('atlas')
]);

const sprite = Sprite.from(Assets.get('cat2.png'));
sprite.anchor.set(0.5, 0.5)
sprite.position.set(
  app.renderer.width / 2,
  app.renderer.height / 2,
)

app.stage.addChild(sprite);

document.body.appendChild(app.view);