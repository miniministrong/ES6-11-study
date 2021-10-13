// 1. 引入fs模块
const fs = require('fs');

// 读取【为学】
function readWeiXue () {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            }
            // 如果成功
            resolve(data);
        })
    })
}

function readChaYangShi () {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            }
            // 如果成功
            resolve(data);
        })
    })
}

function readGuanShuYouGan () {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            }
            // 如果成功
            resolve(data);
        })
    })
}

// 声明一个async函数
async function main() {
    // 获取为学内容
    let weiXue = await readWeiXue();
    // 获取插秧诗内容
    let chaYang = await readChaYangShi();
    // 获取观书有感内容
    let guanShuYouGan = await readGuanShuYouGan();

    console.log(weiXue.toString());
    console.log(chaYang.toString());
    console.log(guanShuYouGan.toString());
}

main();