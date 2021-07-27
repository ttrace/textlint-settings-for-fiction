const fs = require("fs");
var kuromoji = require('kuromoji');
var jaconv = require('jaconv');
var teststring = "";

fs.readFile("test/longtext.txt", "utf-8", (err, data) => {
    if (err) throw err;
    //console.log(data);
    teststring = data;
  });

// この builder が辞書やら何やらをみて、形態素解析機を造ってくれるオブジェクトです。
var builder = kuromoji.builder({
  // ここで辞書があるパスを指定します。今回は kuromoji.js 標準の辞書があるディレクトリを指定
  dicPath: 'node_modules/kuromoji/dict'
});

// 形態素解析機を作るメソッド
builder.build(function(err, tokenizer) {
    // 辞書がなかったりするとここでエラーになります(´・ω・｀)
    if(err) { throw err; }
  
    // tokenizer.tokenize に文字列を渡すと、その文を形態素解析してくれます。
    var tokens = tokenizer.tokenize( teststring );
    //console.log(tokens);
    let noun = [];
    tokens.forEach(element => {
        if(element.pos == "名詞"){
            var readingStr = element.reading;

            if ( readingStr && readingStr.match(/[ア-ン]/g) ){
                readingStr = jaconv.toHiragana(element.reading);
            } else {
                readingStr = "";
            }

            const word = {
                surface_form: element.surface_form,
                word: element.pos,
                wordsup: element.pos_detail_1,
                reading: readingStr,
            }

            if( element.pos_detail_2 == "地域"){
                word.word = "単純地名";
            }

            if( element.pos_detail_2 == "人名" ){
                word.word = "人名";
            }
            if( element.pos_detail_3 == "名" ){
                word.word = "名";
            }
            if( element.pos_detail_3 == "姓" ){
                word.word = "姓";
            }
            
            if( element.pos_detail_1 == "固有名詞"){
                noun.push(word);
            }
        }
    });
    let exportNounMap = new Map(noun.map(o => [o.surface_form, o]));
    const exportNoun = Array.from(exportNounMap.values());
    

    fs.writeFileSync("テストoutput2.txt", JSON.stringify(exportNoun, null , "\t"));
    console.dir('Exported');
    //let tokenObj = JSON.parse(tokens);
    

//    var noun = [];
//    console.dir(noun);
  });
