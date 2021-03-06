/**
 *
 */
angular.module('admin')
/**
 * 高校列表
 */

// 高校类别
    .filter('companyIndustryFilter', function (industry) {
        var a = industry.length;
        return function (param) {
            if (0 <= param < a) {
                return industry[param].name;//TypeError: Cannot read property 'name' of undefined at project-filter-0.0.1.js:12
            }
            else {
                return "?";
            }
        }
    })
    // 高校认证签到时间
    .filter('approvedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "未认证";
            } else if (param === 1) {
                return "已认证";
            }
            else {
                return "?";
            }
        }
    })
    // 高校人脸考勤状态
    .filter('freezedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "正常";
            } else if (param === 1) {
                return "冻结";
            }
            else {
                return "?";
            }
        }
    })
    // 高校人脸考勤状态
    .filter('changeFreezedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "冻结";
            } else if (param === 1) {
                return "解冻";
            }
            else {
                return "?";
            }
        }
    })

    //学生列表
    // 上架下架转换
    .filter('positionStatusChangeFilter', function () {
        return function (status) {
            if (status == 1) {
                return 0;
            } else {
                return 1;
            }
        }
    })
    // 上架下架过滤
    .filter('positionStatusFilter', function () {
        return function (status) {
            if (status == 1) {
                return "签到";
            } else {
                return "签退";
            }
        }
    })
    //学生主类
    .filter('positionCategoryFilter', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "学院";
                case 2:
                    return "UI";
                case 3:
                    return "QA";
                case 4:
                    return "Android";
                case 5:
                    return "IOS";
                case 6:
                    return "WEB";
                case 7:
                    return "OP";
                case 8:
                    return "Java";
                case 9:
                    return "NLP";
                case 10:
                    return "DM";
                case 11:
                    return "DL";
            }
        }
    })
    //入学年限
    .filter('positionEducationFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "2015";
                case 1:
                    return "2016";
                case 2:
                    return "2017";
                case 3:
                    return "2018及以后";
            }
        }
    })
    //所在学院
    .filter('positionExperienceFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "计算机";
                case 1:
                    return "机械自动化";
                case 2:
                    return "法学院";
                case 3:
                    return "文学院";
                case 4:
                    return "商学院";
            }
        }
    })
    //预警
    .filter('positionCompensationFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "良好";
                case 1:
                    return "准预警";
                case 2:
                    return "一次预警";
                case 3:
                    return "多次预警";
            }
        }
    })








    /**
     * Article 列表 过滤器(filter)
     * article：
     * 字段 类别 type  0-首页banner 1-找学生banner  2-找精英banner 3-高校大图
     * 字段 来源 industry   type为3高校大图时使用 0-综合类 1-理工类 2-师范类 3-农林类 4-军事类 5-医药类 6-政法类
     * 字段 类别 status  1-草稿 2-上线
     */
    // 过滤 Article  类型
    .filter("articleTypeFilter", function () {
        const articleType = ['首页Banner', '找学生Banner', '找精英Banner', '高校大图'];
        return function (type) {
            return articleType[type];
        }
    })

    // 过滤 Article 状态
    .filter('articleStatusFilter', function () {
        const articleStatus = ['', '草稿', '上线'];
        return function (status) {// [$injector:undef] Provider 'articleStatusFilterFilter' must return a value from $get factory method.
            return articleStatus[status];
        }
    })

    // 过滤 Article 状态操作按钮名字
    .filter('articleStatusChangeFilter', function () {
        const articleStatusChange = ['', '上线', '下线'];
        return function (status) {
            return articleStatusChange[status];
        }
    });
