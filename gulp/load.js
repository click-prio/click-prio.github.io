'use strict';
/**
 * 一括読み込みタスク
 * 指定されたディレクトリ以下のスクリプトをrequireする
 */

let fs = require('fs');
let path = require('path');
let _ = require('lodash');

// gulpディレクトリにあるタスクをロード
let files = fs.readdirSync(__dirname),
    result = [];

_.forEach(files, (file) => {
    let stats = fs.statSync(path.join(__dirname, file));
    if (stats.isFile() && path.extname(file) === '.js') {
        let name = path.basename(file, '.js');
        if (name === 'load') return;
        result[name] = require(__dirname + '/' + name);
    }
});
module.exports = result;
