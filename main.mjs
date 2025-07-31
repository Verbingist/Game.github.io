import { Level } from './level.mjs';

let levelMatrix = [
    [
        [0, 1, 2, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0],
    ],
    [
        [0, 1, 1, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0],
    ],
    [
        [0, 1, 2, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0],
    ],
    [
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
    ]
];

let level1 = new Level(levelMatrix)
level1.createLevelMatrix();

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW') {
        level1.playerUpdate(0);
    }
    if (event.code == 'KeyS') {
        level1.playerUpdate(1);
    }
    if (event.code == 'KeyA') {
        level1.playerUpdate(2);
    }
    if (event.code == 'KeyD') {
        level1.playerUpdate(3);
    }
})