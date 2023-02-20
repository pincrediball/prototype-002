import Phaser, { Scene } from 'phaser';

export function createPhaserConfig({ scene }: { scene: Scene[] }): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent: 'game',
    width: 400,
    height: 600,
    physics: {
      default: 'matter',
      matter: {
        setBounds: true,
        debug: {
          showAngleIndicator: true,
          showCollisions: true,
          showBody: true,
          showVelocity: true,
        },
      },
    },
    scene,
  };
}
