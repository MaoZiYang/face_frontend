/**
 *
 */
angular.module("admin")

// 高校类别
    .constant('industry', [
        {id: 0, name: '综合类'},
        {id: 1, name: '理工类'},
        {id: 2, name: '师范类'},
        {id: 3, name: '农林类'},
        {id: 4, name: '军事类'},
        {id: 5, name: '医药类'},
        {id: 6, name: '政法类'}
    ])
    // 使用人脸考勤规模
    .constant('financing', [
        {id: 0, name: '无需使用人脸考勤'},
        {id: 1, name: '使用人脸考勤V1.0'},
        {id: 2, name: '使用人脸考勤V2.0'},
        {id: 3, name: '使用人脸考勤V2.1'},
        {id: 4, name: '使用人脸考勤V2.2'},
        {id: 5, name: '使用人脸考勤V2.3'},
        {id: 6, name: '使用人脸考勤V2.4'}
    ])
    // 高校类别多选数据
    .constant('companyIndustryGroup', [
        {industry: 0, name: '综合类'},
        {industry: 1, name: '理工类'},
        {industry: 2, name: '师范类'},
        {industry: 3, name: '农林类'},
        {industry: 4, name: '军事类'},
        {industry: 5, name: '医药类'},
        {industry: 6, name: '政法类'}
    ])
    // 二级三级类目数据
    .constant('categoryData', [
        {
            id: 1,
            name: "学院",
            subCategory: [
                {
                    id: 1,
                    name: "助理"
                },
                {
                    id: 2,
                    name: "初级"
                },
                {
                    id: 3,
                    name: "中级"
                },
                {
                    id: 4,
                    name: "高级"
                },
                {
                    id: 5,
                    name: "总监"
                }
            ]
        },
        {
            id: 2,
            name: "UI",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                },
                {
                    id: 4,
                    name: "总监"
                }
            ]
        },
        {
            id: 3,
            name: "QA",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 2,
                    name: "高级"
                }
            ]
        },
        {
            id: 4,
            name: "Android",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 5,
            name: "IOS",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 6,
            name: "WEB",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 7,
            name: "OP",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 8,
            name: "JAVA",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                },
                {
                    id: 4,
                    name: "总监"
                }
            ]
        },
        {
            id: 9,
            name: "NLP",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 10,
            name: "DM",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 11,
            name: "DL",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        }
    ]);