/**
 * 可以添加返回地址url，多个参数用两个星号分隔 **
 */
//初始化layui插件
var layer, form;
layui.use(['layer', 'form'], function () {
    initpage();

    layer = layui.layer;
    form = layui.form;
    /**
     * 获取已填写的数据记录
     */
    if (idrecord != null && idrecord !== '')
    //查询是否有记录主表信息，如果没有需要插入一次记录主表信息
    $.ajax({
        url: '/drecord/index',
        async: false,
        data: {idrecord: idrecord, idpage: idpage},
        type: "POST",
        success: function (res) {
            if (res.length > 0) return;
            insertRecord(pageData[0]);
        },
        error: function (res) {
            console.log(res);
        }
    });
    //获取填写记录详细信息
    $.ajax({
        url: '/drecord/getRecordValue',
        async: false,
        data: {idrecord: idrecord, idpage: idpage},
        type: "POST",
        success: function (res) {
            res=res[0];
            for (var i in res) {
                var values=res[i].split(",");
                if(values.length<2) continue;
                for(var j=0;j<values.length;j++)
                    if(values[j])
                        res[i+'['+values[j]+']']=values[j];
            }
            form.val("value", res);
        },
        error: function (res) {
            console.log(res);
        }
    });
    //表单提交事件处理
    form.on('submit(sub)', function (data) {
        //如果记录主键为空才保存一次主表记录信息
        if (idrecord == null || idrecord === '') insertRecord(pageData[0]);
        data.field['idpage'] = idpage;
        data.field['idrecord'] = idrecord;
        data.field['state'] = '1';
        saveData(data.field);
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });
    //表单保存事件处理
    form.on('submit(sal)', function (data) {
        //如果记录主键为空才保存一次主表记录信息
        if (idrecord == null || idrecord === '') insertRecord(pageData[0]);
        data.field['idpage'] = idpage;
        data.field['idrecord'] = idrecord;
        data.field['state'] = '0';
        saveData(data.field);
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    function saveData(data) {
        for(var index in data){
            if(index.indexOf('\[')===-1)
                data[index].replace(/\[/ig,"【").replace(/\]/ig,"】").replace(/,/ig,"，");
            else
                data[index]=data[index].replace(/\[/ig,"【").replace(/\]/ig,"】").replace(/,/ig,"，")+',';
        }
        $.ajax({
            url: '/drecord/insertRecordValue',
            async: false,
            data: data,
            type: "POST",
            success: function (res) {
                if (res > 0)
                    saveAfter();
                if (url == null || url === '') {
                    if (self != top) {
                        window.history.back();
                    } else
                        window.close();
                } else {
                    url = url + (url.indexOf('?') === -1 ? "?" : "&") + "idrecord=" + idrecord + "&idpage=" + idpage;
                    if (getValueByName('back'))
                        layer.alert("保存完成", function (index) {
                            window.location.href = url;
                        });
                    else
                        $.ajax({
                            url: url,
                            async: false,
                            //data: data,
                            type: "POST",
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res);
                                layer.alert("保存完成", function (index) {
                                    if (self != top) {
                                        window.history.back();
                                    } else
                                        window.close();
                                });
                            },
                            error: function (res) {
                                console.log(res);
                                if (res.status === 200)
                                    layer.alert("保存完成", function (index) {
                                        if (self != top) {
                                            window.history.back();
                                        } else
                                            window.close();
                                    });
                            }
                        });
                }
            },
            error: function (res) {
                console.log(res);
            }
        });
    }

    //评估记录保存完成之后保存评估结果信息
    function saveAfter() {
        $('tr[condition]').each(function (index, ele) {//在一行的范围内操作
            var condition = $(ele).attr('condition');
            if (!condition) return;
            //条件取值填写还存在问题，当等于某个固定的字符串是可能会出错
            var con = condition.split(/[^a-zA-Z]+/);//这么才分有问题，等于某个字母或不等于某个字母是出错
            for (var i = 0; i < con.length; i++) {
                if (con[i] == 'null'||con[i].length==0) continue;
                condition = condition.replace(eval('/' + con[i] + '/ig'), getValueByName(con[i]));
            }
            if (eval(condition)) {//如果结果为真，则保存结果
                var resultText = '';
                $(ele).find('td[getvalue=getvalue]').each(function () {
                    var result = $(this).contents().filter(function () {
                        return this.nodeType === 3;
                    }).text();
                    var formid = $(this).attr('formid').split(',');
                    for (var i = 0; i < formid.length; i++) {
                        if (!formid[i]) continue;
                        if (i === 0) result += '[';
                        result += getValueByName(formid[i]);
                        if (i + 1 === formid.length) result += ']';
                    }
                    resultText += (resultText ? "-->" : "") + result;
                });
                $.ajax({
                    url: '/drecord/saveRecordValue',
                    data: {idpage: idpage, idrecord: idrecord, record_result: resultText},
                    async: false,
                    method: 'POST',
                    success: function (res) {
                        console.log(res);
                    },
                    error: function (res) {
                        console.log(res);
                    }
                });
            }
        });
    }

    //条件取值填写还存在问题，当等于某个固定的字符串是可能会出错
    function getValueByName(name) {
        var obj = $('*[name^=' + name + ']'), value = "";
        if (obj.attr('type') === 'radio' || obj.attr('type') === 'checkbox') {
            obj.each(function (i, e) {
                if (e.checked) value += "," + $(e).val();
            });
            value="'"+value.substring(1)+"'";
        } else {
            if(obj.length==0||obj.val().length==0)
                value += 'null';
            else
                value += "'"+obj.val()+"'";
        }
        return value;
    }

    $('input[calculate=true]').each(function () {
        $(this).click(function () {
            $(this).val(changeValueToResult(calculate[this.name]));
        });
    });
    /**
     * 获取表单中选项值，经过计算公式计算后返回计算结果
     * @returns
     */
    var ifresult = 0;
    var num = /[\d\)]$/;

    function changeValueToResult(equ) {
        //var equ=equation[id];
        var equationId = equ.split(/[^a-zA-Z]+/);
        var equaSymbol = equ.split(/[a-zA-Z]+/);
        var arrLen = equationId.length < equaSymbol.length ? equaSymbol.length : equationId.length;

        var str = "";
        if (equaSymbol[0] == null || "" === equaSymbol[0]) {
            if ($("#" + equationId[0]).attr('type') == 'text') {//文本框处理
                str += num.test($("#" + equationId[0]).val()) ? $("#" + equationId[0]).val() : 0;
            } else {
                if ($("input[name=" + equationId[0] + "]:checked").val() != undefined) {
                    //str+=$("input[name="+equationId[0]+"]:checked").val();
                    if ($("input[name=" + equationId[0] + "]:checked").length > 1) {
                        $("input[name=" + equationId[0] + "]:checked").each(function (index) {
                            if (index == 0) str += $(this).val();
                            else str += "+" + $(this).val();
                        });
                    } else {
                        str += $("input[name=" + equationId[0] + "]:checked").val();
                    }
                }
            }
        } else {
            str += equaSymbol[0];
        }
        for (var i = 1; i < arrLen; i++) {
            if (equationId[i] != "") {
                if ($("#" + equationId[i]).attr('type') == 'text') {//文本框处理
                    if (num.test(str.substring(str.length - 1, str.length))) {
                        str += equaSymbol[i] + (num.test($("#" + equationId[i]).val()) ? $("#" + equationId[i]).val() : 0);
                    } else {
                        str += (num.test($("#" + equationId[i]).val()) ? $("#" + equationId[i]).val() : 0) + equaSymbol[i];
                    }
                    continue;
                }
                if (!num.test($("input[name=" + equationId[i] + "]:checked").val())) continue;
                if (str == "" || !num.test(str)) {
                    if ($("input[name=" + equationId[i] + "]:checked").length > 1) {
                        $("input[name=" + equationId[i] + "]:checked").each(function (index) {
                            if (index == 0) str += $(this).val();
                            else str += "+" + $(this).val();
                        });
                    } else {
                        str += $("input[name=" + equationId[i] + "]:checked").val();
                    }
                    str += equaSymbol[i];
                } else {
                    str += equaSymbol[i];
                    if ($("input[name=" + equationId[i] + "]:checked").length > 1) {
                        $("input[name=" + equationId[i] + "]:checked").each(function (index) {
                            if (index == 0) str += $(this).val();
                            else str += "+" + $(this).val();
                        });
                    } else {
                        str += $("input[name=" + equationId[i] + "]:checked").val();
                    }
                }
            } else {
                str += equaSymbol[i];
            }
        }
        str = str.replace(/undefined/g, "");
        ifresult = eval(num.test(str) ? str : equationId[equationId.length - 1] === '' ? str.substring(0, str.length - 1) + equaSymbol[equaSymbol.length - 1] : str.substring(0, str.length - 1));
        //$("#"+id).val(ifresult);
        //result["'"+$("#"+id).attr('equation')+"'"]=ifresult;
        return ifresult;
    }
});
var url = getQueryString("url") == null ? null : getQueryString("url").replace(/\*\*/ig, "&");
var idpage = getQueryString('idpage');//模板表主表主键
var idrecord = getQueryString("idrecord");//记录主表主键
var pageData;//保存模板主表信息
/**
 * 保存主表信息
 */
function insertRecord(page) {
    var record = {
        idpage: idpage,
        idrecord: idrecord,
        page_backimg: page.page_backimg,
        record_title: page.page_title,
        record_state: '-1'
    };
    $.ajax({
        url: '/drecord/insertRecord',
        async: false,
        data: record,
        type: "POST",
        success: function (res) {
            idrecord = res;
        },
        error: function (res) {
            console.log(res);
        }
    });
}

function initpage() {
    /**
     * 获取模板标题
     */
    $.ajax({
        url: '/dpage/getPageData',
        async: false,
        data: {idpage: idpage},
        type: "POST",
        success: function (res) {
            pageData = res;
            //设置标题
            $('#optfile').append('<h1 style="' + (res[0].textcss == null ? '' : res[0].textcss) + (res[0].cssstyle == null ? '' : res[0].cssstyle) + '" data_id="">' +
                res[0].page_title + '</h1>');
        },
        error: function (res) {
            console.log(res);
        }
    });
    /**
     * 获取模板内容
     */
    $.ajax({
        url: '/dpage/getPageEle',
        async: false,
        data: {idpage: idpage},
        type: "POST",
        success: function (res) {
            $('#optfile').find('h1').after('<form lay-filter="value" class="layui-form" onsubmit="return false;">' + makePageEle(res) + '</form>');
            var btn = '<div class="optButton" style="text-align: center;">';
            if (getQueryString("editor") === 'true') {
                btn += '<button class="layui-btn" lay-submit lay-filter="sub">提交</button>';
                btn += '<button class="layui-btn" lay-submit lay-filter="sal">保存</button>'
            }
            btn += '<a class="layui-btn layui-btn-warm" onclick="javascript:window.history.back();">返回</a>';
            btn += '</div>'
            $('#optfile').find("form").find("div:last").after(btn);
        },
        error: function (res) {
            console.log(res);
        }
    });
}
