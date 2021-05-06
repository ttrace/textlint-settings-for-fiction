module.exports = [
    // https://azu.github.io/morpheme-match/
    // ルール　助詞の連続（タイプミス）
    {
        message: `「$1$2$3」には助詞の連続があります（単純な助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
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
        message: `「$1$2$3」には助詞の連続があります（格助詞と係助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
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
        message: `「$1$2$3」には助詞の連続があります（格助詞から係助詞への連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
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
        message: `「$1$2$3」には助詞の連続があります（格助詞から係助詞への連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": "でも",
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（格助詞から係助詞への連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
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
        message: `「$1$2$3」には助詞の連続があります（格助詞から係助詞への連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "surface_form": "さえ",
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「がが」はタイプミスの疑いがあります`,
        tokens: [
            {
                "surface_form": "が",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
            },
            {
                "surface_form": "が",
                "pos": "接続詞",
            },
         
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（格助詞と格助詞の連続）`,
        //組織票にに支えられて
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（格助詞と格助詞の連続）`,
        //海発のの発言
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'の',
                "pos": "助詞",
                "pos_detail_1": "連体化",
                "_capture": "$2"
            },{
                "surface_form": 'の',
                "pos": "助詞",
                "pos_detail_1": "連体化",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1をの」には不自然な助詞の連続があります`,
        //新型コロナウイルスのためにの
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
        message: `「$1にの」には不自然な助詞の連続があります`,
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
        message: `「$1よりの」には不自然な助詞の連続があります`,
        //新型コロナウイルスのためにの
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
    },    {
        message: `「$1やの」には不自然な助詞の連続があります`,
        //新型コロナウイルスのためにの
        expected: '$1$やの',
        tokens: [
            {
                "_capture": "$1"
            },{
                "surface_form": 'や',
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
        message: '「~た~た」と続いています',
        tokens: [
            {
                "pos": "動詞",
                "conjugated_form": "連用形",
            },{
                "surface_form": "た",
                "pos": "助動詞",
                "conjugated_form": "基本形",
            },{
                "pos": "動詞",
                "conjugated_form": "連用形",
            },{
                "surface_form": "た",
                "pos": "助動詞",
            }
        ]
    },
    //接続詞の連続（タイプミス）
    //例）聞いたのでで
    {
        message: '接続詞が二つ続いています（接続助詞と接続詞）',
        tokens: [
            {
                "pos_detail_1": "接続助詞",
            },{
                "pos": "接続詞",
            }
        ]
    },
    {
        message: '「~れ。」で終わっています。~れる。~れた。などと続く可能性があります',
        tokens: [
            {
                "pos": "動詞",
                "conjugated_form": "未然形",
            },
            {
                "surface_form": "れ",
                "pos": "動詞",
                "pos_detail_1": "接尾",
                "conjugated_form": "連用形",
                "basic_form": "れる",
            },
            {
                "surface_form": "。",
                "pos_detail_1": "句点",
            }
        ]
    },
    {
        message: '連用形の動詞で文が終わっています。~た。~ていた。などと続く可能性があります',
        tokens: [
            {
                "pos": "動詞",
                "conjugated_form": "連用形",
            },
            {
                "surface_form": "。",
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