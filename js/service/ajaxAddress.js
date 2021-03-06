/**
 * CRUD
 * 后台的最终目的就是针对数据库的操作，而操作归纳下来无非就是 Create(新增),Read(读取),Update(更新),Delete(删除),这就是CRUD的意思
 * Restful
 * 前后端分离，我们需要将CRUD的接口通过标准协议(WebAPI)来实现，Restful就是为这个协议而生的
 * HTTP请求      CRUD            返回状态位
 * POST         Create          201
 * GET          Read            200
 * PUT          Update          200
 * DELETE       Delete          200
 */
angular.module("admin")
    .factory('pathProject', function () {
        return {
            /**
             * 上传图片
             * 请求方式3地址：post # /a/u/img/{module}
             * 说明：module图片类型，服务器上文件夹名称,这里填写task
             * 如：/a/u/img/task
             *
             * @returns {string}
             */
            //上传图片接口
            upload_url: function () {
                return "/face-admin-ajax/a/u/img/task"//3->task
            },
            // 获取高校列表接口
            getCompanyList_url: "/face-admin-ajax/a/company/search",
            // 删除高校信息接口
            delCompany_url: function (id) {
                return "/face-admin-ajax/a/u/company/" + id
            },
            // 认证/冻结高校状态接口
            changeCompanyStatus_url: function (id, type, status) {
                return "/face-admin-ajax/a/u/company/status?id=" + id + "&type=" + type + "&status=" + status;
            },
            // 获取高校详情接口
            getCompanyDetail_url: function (id) {
                return "/face-admin-ajax/a/company/" + id;
            },
            // 新增高校详情
            addCompany_url: "/face-admin-ajax/a/u/company",
            // 编辑高校详情
            editCompany_url: function (id) {
                return "/face-admin-ajax/a/u/company/" + id
            },

            // 学生列表接口
            PositionList_url: " /face-admin-ajax/a/profession/search",//JSON/PositionList.json
            // 添加学生接口
            postPosition_url: "/face-admin-ajax/a/u/profession",
            // 编辑学生接口
            putPosition_url: function (id) {
                return " /face-admin-ajax/a/u/profession/" + id
            },
            // 删除学生接口
            deletePosition_url: function (id) {
                return "/face-admin-ajax/a/u/profession/" + id
            },
            // 学生冻结修改接口
            putPositionstatus_url: function (params, id) {
                console.log(id);
                return "/face-admin-ajax/a/u/profession/status/?id=" + id + "&status=" + params
            },
            // 获取学生明细信息接口
            getPosition_url: function (id) {
                return " /face-admin-ajax/a/profession/" + id
            },
            // 获取高校人脸考勤使用情况标签接口
            getCompanyTags_url: function (id) {
                return "/face-admin-ajax/a/tags/" + id
            },

            /**
             * Article管理
             */
            // Article列表接口
            getArticlelist_url: "/face-admin-ajax/a/article/search",
            // 获取article
            getArticle_url: function (id) {
                return "/face-admin-ajax/a/article/" + id;
            },
            // 新增article
            addArticle_url: "/face-admin-ajax/a/u/article",
            // 删除article
            deleteArticle_url: function (id) {
                return "/face-admin-ajax/a/u/article/" + id;
            },
            // 编辑article
            editArticle_url: function (id) {
                return "/face-admin-ajax/a/u/article/" + id;
            },
            // 修改article的上架/下架
            changeArticleStatus_url: function (id, status) {
                return "/face-admin-ajax/a/u/article/status?id=" + id + "&status=" + status;
            }
        }
    });