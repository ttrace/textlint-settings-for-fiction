module.exports = [
    // ルール　助詞の連続（タイプミス）
    {
        message: `「$1$2$3」には助詞の連続があります（係助詞の連続） err 1`,
        //名詞はは連続しない。
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（格助詞と係助詞の連続） err2`,
        //名詞がは使える。
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": "が",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（格助詞から係助詞への連続） err3`,
        //名詞をは使う。
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": "は",
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$2」と「$3」の助詞の連続があります（格助詞から副助詞への連続） err4`,
        //名詞をでも使う。
        expected: '$2',
        tokens: [
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": "でも",
                "pos": "助詞",
                "pos_detail_1": "副助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$2」と「$3」という助詞の連続があります（格助詞から係助詞への連続）err5` ,
        //名詞をしか考えられない。
        expected: '$2',
        tokens: [
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": "しか",
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「を」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-1`,
        //私をが小説を読む。
        expected: 'を',
        tokens: [
            {
                "surface_form": 'を',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「で」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-2`,
        //私がが小説を読む。
        expected: 'で',
        tokens: [
            {
                "surface_form": 'で',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般'
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「と」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-3`,
        //私とが小説を読む。
        expected: 'と',
        tokens: [
            {
                "surface_form": 'と',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「に」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-4`,
        //私にが小説を読む。
        expected: 'に',
        tokens: [
            {
                "surface_form": 'に',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般'
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「が」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-5`,
        //私がが小説を読む。
        expected: 'が',
        tokens: [
            {
                "surface_form": 'が',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般'
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「へ」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-7`,
        //私へが小説を読む。
        expected: 'へ',
        tokens: [
            {
                "surface_form": 'へ',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般'
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    {
        message: `「より」と「$3」の助詞の連続はタイプミスの可能性があります（格助詞の連続） err6-8`,
        //私よりが小説を読む。
        expected: 'より',
        tokens: [
            {
                "surface_form": 'より',
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
            },
            {
                "pos": '助詞',
                "pos_detail_1": '格助詞',
                "pos_detail_2": '一般',
                "_capture": "$3"
            },
        ]
    },
    //格助詞　連体化
    {
        message: `「$2」と「$3」の助詞の連続はタイプミスの可能性があります（連体化した助詞の連続） err7`,
        //彼のの発言を聞く
        expected: '$2',
        tokens: [
            {
                "pos": '助詞',
                "pos_detail_1": '連体化',
                "pos_detail_2": '*',
                "_capture": "$2"
            },
            {
                "pos": '助詞',
                "pos_detail_1": '連体化',
                "pos_detail_2": '*',
                "_capture": "$3"
            },
        ]
    },
    //格助詞＋連体化で不自然なもの
    {
        message: `「$1をの」には不自然な助詞の連続があります（格助詞＋連体化） err8`,
        //新型コロナウイルスのためをの
        expected: '$1$をの',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'を',
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": 'の',
                "pos": '助詞',
                "pos_detail_1": '連体化',
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1にの」には不自然な助詞の連続があります err9`,
        //新型コロナウイルスのためにの
        expected: '$1$にの',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'に',
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": 'の',
                "pos": '助詞',
                "pos_detail_1": '連体化',
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1よりの」には不自然な助詞の連続があります err10`,
        //新型コロナウイルスのためよりの
        expected: '$1$よりの',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'より',
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": 'の',
                "pos": '助詞',
                "pos_detail_1": '連体化',
                "_capture": "$3"
            }
        ]
    },
    //並立助詞の後の助詞
    {
        message: `「$1や$3」には並立助詞の後に助詞が続いています err 11`,
        //新型コロナウイルスのためやの
        expected: '$1やの',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'や',
                "pos": "助詞",
                "pos_detail_1": "並立助詞",
                "_capture": "$2"
            },{
                "pos": '助詞',
                "_capture": "$3"
            }
        ]
    },

    //以下、リファクタリング前
    //接続詞の連続（タイプミス）
    //例）聞いたのでで
    {
        message: '「$1」と「$2」で接続詞が続いています（接続助詞と接続詞） err12',
        //話を聞いたのでで僕は行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "で",
                "pos": "接続詞",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と接続詞） err13',
        //話を聞いたのでで、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "で",
                "pos": "助動詞",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでが、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "が",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでの、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "の",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでを、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "を",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでへ、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "へ",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでが、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "で",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と格助詞） err13-2',
        //話を聞いたのでが、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "や",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1$2$3」に不自然な助詞の連続があります（係助詞から格助詞、そして係助詞）、 err13-3',
        //造作はに拘っていない。
        tokens: [
            {
                "pos_detail_1": "係助詞",
                "_capture": "$1",
            },{
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            },{
                "pos_detail_1": "係助詞",
                "_capture": "$3",
            }
        ]
    },
    {
        message: '「$1」と「$2」不自然な助詞の連続があります（副詞化の助詞から格助詞） err13-4',
        //物語は緊密にに構成されている。
        tokens: [
            {
                "pos": "助詞",
                "pos_detail_1": "副詞化",
                "_capture": "$1",
            },{
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1」と「$2」接続詞が二つ続いています（接続助詞と副詞化助詞） err13-5',
        //話を聞いたのでに、行くことにした。
        tokens: [
            {
                "pos_detail_1": "接続助詞",
                "_capture": "$1",
            },{
                "surface_form": "に",
                "pos": "助詞",
                "pos_detail_1": "副詞化",
                "_capture": "$2",
            }
        ]
    },
    {
        message: '「$1$2。」で文章が終わっています。~れる。~れた。などと続く可能性があります err14',
        //その本は読まれ。
        expected: '$1$2た',
        tokens: [
            {
                "pos": "動詞",
                "conjugated_form": "未然形",
                "_capture": "$1",
            },
            {
                "surface_form": "れ",
                "pos": "動詞",
                "pos_detail_1": "接尾",
                "conjugated_form": "連用形",
                "basic_form": "れる",
                "_capture": "$2",
            },
            {
                "surface_form": "。",
                "pos_detail_1": "句点",
            }
        ]
    },
    {
        message: '連用形の動詞「$1」で文が終わっています。「$1ました」の誤記の可能性があります err15',
        tokens: [
            {
                "pos": "動詞",
                "pos_detail_1": '自立',
                "conjugated_form": "連用形",
                "_capture": "$1",
            },
            {
                "surface_form": "。",
            }
        ]
    },
    {
        message: '連用形の「$1」で文が終わっています。「$1た」の誤記の可能性があります err16',
        tokens: [
            {
                "conjugated_form": "連用タ接続",
                "_capture": "$1",
            },
            {
                "surface_form": "。",
            }
        ]
    },
    {
        message: '「$1」「$2」では、動詞の基本形に接続助詞「んで」が続いています。タイプミスではないでしょうか。 err17',
        //敵が取り囲むんでいる。
        tokens: [
            {
                "pos": "動詞",
                "conjugated_form": "基本形",
                "_capture": "$1",
            },
            {
                "surface_form": "んで",
                "pos_detail_1": "接続助詞",
                "_capture": "$2",
            }
        ]
    },
    
    //助動詞が続いています
    //「どきりとしたた」
    {
        message: '$1$2と、助動詞が続いています',
        expected: "た",
        tokens: [
            {
                "surface_form": "た",
                "pos": "助動詞",
                "conjugated_form": "基本形",
                "_capture": "$1"
            },
            {
                "surface_form": "た",
                "pos": "助動詞",
                "conjugated_form": "基本形",
                "_capture": "$2"
            },
        ]
    },
    //サ変動詞タイプミスの可能性
    //「参加しする」
    {
        message: 'サ変動詞の$1$2は、タイプミスの可能性があります',
        tokens: [
            {
                "pos": "名詞",
                "pos_detail_1": "サ変接続",
                "_capture": "$1"
            },
            {
                "surface_form": "しする",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "_capture": "$2"
            },
            ]
    },
    // 超えると越える
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "日",
                "pos_detail_1": "接尾",
                "pos_detail_2": "助数詞",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "時間",
                "pos_detail_1": "接尾",
                "pos_detail_2": "助数詞",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "年",
                "pos_detail_1": "接尾",
                "pos_detail_2": "助数詞",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "半年",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "分",
                "pos_detail_1": "接尾",
                "pos_detail_2": "助数詞",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    {
        message: '距離・時間・点は「越える」を用います',
        tokens: [
            {
                "surface_form": "秒",
                "pos_detail_1": "接尾",
                "pos_detail_2": "助数詞",
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "超え",
                "pos": "動詞",
            },
        ]
    },
    //吹き出す問題
    {
        message: '笑う場合には、「噴き出す」を用います',
        expected: '$1$2噴き出す',
        tokens: [
            {
                "pos_detail_2": "人名",
                "_capture": "$1"
            },
            {
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },
            {
                "surface_form": "吹き出す",
                "pos": "動詞",
            },
        ]
    },    {
        message: '笑う場合には、「噴き出し」を用います',
        expected: '$1$2噴き出し',
        tokens: [
            {
                "pos_detail_2": "人名",
                "_capture": "$1"
            },
            {
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },
            {
                "surface_form": "吹き出し",
                "pos": "動詞",
            },
        ]
    },    {
        message: '笑う場合には、「噴き出す」を用います',
        expected: '$1$2噴き出す',
        tokens: [
            {
                "pos_detail_1": "代名詞",
                "_capture": "$1"
            },
            {
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },
            {
                "surface_form": "吹き出す",
                "pos": "動詞",
            },
        ]
    },    {
        message: '笑う場合には、「噴き出し」を用います',
        expected: '$1$2噴き出し',
        tokens: [
            {
                "pos_detail_1": "代名詞",
                "_capture": "$1"
            },
            {
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },
            {
                "surface_form": "吹き出し",
                "pos": "動詞",
            },
        ]
    },
];