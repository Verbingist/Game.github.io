export class Level {
    constructor(levelMatrix) {
        this.levelMatrix = levelMatrix;
    }

    createLevelMatrix() {
        this.levelMatrix.forEach((item, index1) => {
            let string = document.createElement('div');
            item.forEach((item, index2) => {
                let block = document.createElement('span');
                block.textContent = `${index1}, ${index2}`
                if (item[0]) {
                    this.xPlayer = index2;
                    this.yPlayer = index1;
                    let player = document.createElement('span');
                    player.id = 'player';
                    player.classList.add('player')
                    this.player = player;
                    block.append(this.player)
                }
                if (item[1]) {
                    block.textContent += '\nenemy';
                }
                if (item[2]) {
                    block.textContent += `\ntype: ${item[2]}`;
                }
                if (!item[3]) {
                    block.classList.toggle('block')
                }
                else {
                    block.classList.toggle('noneBlock')
                }
                if (item[4]) {
                    block.textContent += '\nstation';
                }
                string.append(block);
            })
            document.body.append(string);
        })
    }

    playerUpdate(event) {
        switch (event) {
            case 0: {
                let one = document.getElementById('player')
                one.parentNode.removeChild(one);
                this.levelMatrix[this.yPlayer][this.xPlayer][0] = 0;
                this.levelMatrix[this.yPlayer - 1][this.xPlayer][0] = 1;
                document.body.innerHTML = '';
                this.createLevelMatrix();
                break;
            }
            case 1: {
                let one = document.getElementById('player')
                one.parentNode.removeChild(one);
                this.levelMatrix[this.yPlayer][this.xPlayer][0] = 0;
                this.levelMatrix[this.yPlayer + 1][this.xPlayer][0] = 1;
                document.body.innerHTML = '';
                this.createLevelMatrix();
                break;
            }
            case 2: {
                let one = document.getElementById('player')
                one.parentNode.removeChild(one);
                this.levelMatrix[this.yPlayer][this.xPlayer][0] = 0;
                this.levelMatrix[this.yPlayer][this.xPlayer - 1][0] = 1;
                document.body.innerHTML = '';
                this.createLevelMatrix();
                break;
            }
            case 3: {
                let one = document.getElementById('player')
                one.parentNode.removeChild(one);
                this.levelMatrix[this.yPlayer][this.xPlayer][0] = 0;
                this.levelMatrix[this.yPlayer][this.xPlayer + 1][0] = 1;
                document.body.innerHTML = '';
                this.createLevelMatrix();
                break;
            }
        }
    }
}