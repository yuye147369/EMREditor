/**
 * 弹窗内容基础数据
 * @type {{dataadd: *[], tableadd: *[], cssstyle: *[], textcss: *[], rightMenu: *[]}}
 */
window['data'] = {
    //添加元素中的表单项，不能有单选框和复选框
    dataadd: [
        {id: 'idele', text: '主键', hidden: true, type: 'input', hint: '', value: {}},
        {
            id: 'idpage',
            text: '页面主表主键',
            hidden: true,
            type: 'input',
            defval: getQueryString('idpage'),
            hint: '',
            value: {}
        },
        {id: 'label', text: '显示文字', hidden: false, type: 'input', hint: '输入需要显示的文字', value: {}},
        {id: 'textarea', text: '显示文字', hidden: false, type: 'textarea', hint: '输入需要显示的文字', value: {}},
        {id: 'ele_id', text: '元素id', hidden: false, type: 'input', hint: '只能输入小写字母', value: {}},
        {
            id: 'ele_type',
            text: '元素类型',
            hidden: false,
            type: 'select',
            hint: '',
            value: {/*1: '分类标题', 2: 'label',*/
                3: '输入框',
                4: '下拉框',
                5: '单选框',
                6: '多选框',
                7: '文本域'/*, 8: '文件上传', 9: '说明性文字'*/
            }
        },
        {id: 'ele_conn', text: '数据源接口', hidden: false, type: 'input', hint: '下拉框，单选，多选框选择数据来源接口', value: {}},
        {
            id: 'ele_value',
            text: '数据固定值',
            hidden: false,
            type: 'textarea',
            hint: '下拉框，单选，多选框选择数据固定值，json格式，连接地址则为key，value',
            value: {}
        },
        {
            id: 'limit_type',
            text: '限制类型',
            hidden: false,
            type: 'select',
            hint: '',
            value: {1: '数值大小', 2: '字符长度', 3: '不能包含字符'}
        },
        {id: 'limit_length', text: '输入值长度', hidden: false, type: 'input', hint: '输入字符长度范围', value: {}},
        {id: 'limit_range', text: '输入值范围', hidden: false, type: 'input', hint: '输入数值值范围 a>10 and a<20 的形式', value: {}},
        {
            id: 'limit_char',
            text: '字符限制',
            hidden: false,
            type: 'input',
            hint: '输入值中不能包含的字符（需用正则表达式，匹配不需要包含的内容）',
            value: {}
        },
        {id: 'occupy_col', text: '占用列', hidden: false, type: 'input', hint: '输入列数', value: {}},
        {id: 'occupy_row', text: '占用行', hidden: false, type: 'input', hint: '输入行数（只对textarea生效）', value: {}},
        {id: 'calculate', text: '计算公式', hiddeng: false, type: 'input', hint: '点击编辑计算公式', value: {}},
        {id: 'show_seq', text: '显示顺序', hidden: true, type: 'input', hint: '', value: {}}
    ],
    //添加表格的数据
    tableadd: [
        {id: 'idele', text: '主键', hidden: true, type: 'input', hint: '', value: {}},
        {id: 'ele_type', text: '元素类型', hidden: true, type: 'input', defval: '10', hint: '', value: {}},
        {
            id: 'idpage',
            text: '主表主键',
            hidden: true,
            type: 'input',
            defval: getQueryString('idpage'),
            hint: '',
            value: {}
        },
        {id: 'label', text: '表格标题', hidden: false, type: 'input', hint: '输入当前表格的标题', value: {}},
        {id: 'tablerow', text: '行', hidden: false, type: 'input', hint: '输入需要的行', value: {}},
        {id: 'tablecol', text: '列', hidden: false, type: 'input', hint: '输入需要的列', value: {}},
        {id: 'textcss', text: '边框', hidden: false, type: 'input', defval: '1', hint: '输入需要的边框宽度', value: {}},
        {id: 'cssstyle ', text: '表格摘要', hidden: false, type: 'input', hint: '输入需要的表格摘要信息', value: {}}
    ],
    //修改文字css中的表单项，不能有单选框和复选框
    textcss: [
        {id: 'idele', text: '主键', hidden: true, type: 'input', hint: '', value: {}},
        {
            id: 'idpage',
            text: '页面主表主键',
            hidden: true,
            type: 'input',
            defval: getQueryString('idpage'),
            hint: '',
            value: {}
        },
        {id: 'font-style', text: '字体样式', hidden: false, type: 'select', hint: '', value: {normal: '正常', italic: '斜体'}},
        {id: 'font-weight', text: '字体粗细', hidden: false, type: 'input', hint: '输入100-900之间的数值', value: {}},
        {id: 'font-size', text: '字体大小', hidden: false, type: 'input', hint: '数值代表字体大小，需要添加单位', value: {}},
        {id: 'vertical-align', text: '上下标', hidden: false, type: "select", hint: '', value: {super: '上标字', sub: '下标字'}},
        {
            id: 'text-decoration',
            text: '字体线',
            hidden: false,
            type: 'select',
            hint: '',
            value: {'line-through': '删除线', overline: '顶线', underline: '下划线'}
        },
        {
            id: 'text-align',
            text: '水平对齐',
            hidden: false,
            type: 'select',
            hint: '',
            value: {left: '左对齐', center: '居中对齐', right: '右对齐', justify: '分散对齐'}
        },
        {
            id: 'vertical-align',
            text: '垂直对齐',
            hidden: false,
            type: 'select',
            hint: '',
            value: {top: '向上对齐', middle: '垂直居中', bottom: '向下对齐'}
        },
        {id: 'color', text: '字体颜色', hidden: false, type: 'input', hint: '输入颜色单词或#号开头的十六进制数', value: {}}
    ],
    //修改内容样式中的css表单项，不能有单选框和复选框
    cssstyle: [
        {id: 'idele', text: '主键', hidden: true, type: 'input', hint: '', value: {}},
        {
            id: 'idpage',
            text: '页面主表主键',
            hidden: true,
            type: 'input',
            defval: getQueryString('idpage'),
            hint: '',
            value: {}
        },
        {id: 'float', text: '浮动', hidden: false, type: 'select', hint: '', value: {left: '左浮动', right: '右浮动'}},
        {
            id: 'clear',
            text: '清除浮动',
            hidden: false,
            type: 'select',
            hint: '',
            value: {both: '全部', left: '左浮动', right: '右浮动'}
        },
        {id: 'background-color', text: '背景颜色', hidden: false, type: 'input', hint: '输入颜色单词或#号开头的十六进制数', value: {}},
        {id: 'padding-top', text: '内上边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'padding-right', text: '内右边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'padding-bottom', text: '内下边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'padding-left', text: '内左边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'margin-top', text: '外上边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'margin-right', text: '外右边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'margin-bottom', text: '外下边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'margin-left', text: '外左边距', hidden: false, type: 'input', hint: '输入间隔宽度，需要添加单位', value: {}},
        {id: 'border-top', text: '上框线', hidden: false, type: 'input', hint: '宽度，需要添加单位 样式 颜色', value: {}},
        {id: 'border-bottom', text: '下框线', hidden: false, type: 'input', hint: '宽度，需要添加单位 样式 颜色', value: {}},
        {id: 'border-left', text: '左框线', hidden: false, type: 'input', hint: '宽度，需要添加单位 样式 颜色', value: {}},
        {id: 'border-right', text: '右框线', hidden: false, type: 'input', hint: '宽度，需要添加单位 样式 颜色', value: {}},
    ],
    //右键菜单项
    rightMenu: [
        {id: 'addform', text: '添加元素', hidden: true},
        {id: 'addtable', text: '添加表格', hidden: true},
        {id: 'editform', text: '编辑元素'},
        {id: 'delform', text: '删除元素'},
        {id: 'textcss', text: '文字样式'},
        {id: 'cssstyle', text: 'css内容样式'}
    ],
    //表格单元格内添加表单元素
    tableFormEle: [
        {id: 'ele_id', text: '元素id', hidden: false, type: 'input', hint: '只能输入小写字母', value: {}},
        {
            id: 'ele_type',
            text: '元素类型',
            hidden: false,
            type: 'select',
            hint: '',
            value: {/*1: '分类标题', 2: 'label',*/
                3: '输入框',
                4: '下拉框',
                5: '单选框',
                6: '多选框',
                7: '文本域'/*, 8: '文件上传', 9: '说明性文字'*/
            }
        },
        {id: 'ele_conn', text: '数据源接口', hidden: false, type: 'input', hint: '下拉框，单选，多选框选择数据来源接口', value: {}},
        {
            id: 'ele_value',
            text: '数据固定值',
            hidden: false,
            type: 'textarea',
            hint: '下拉框，单选，多选框选择数据固定值，json格式，连接地址则为key，value',
            value: {}
        },
        {id: 'calculate', text: '计算公式', hidden: false, type: 'input', hint: '点击编辑计算公式，仅输入框有效', value: {}}
    ]
};

//页面元素右键菜单执行函数
var menuFun = {
    addform: function (type, ele_id, title, ele_type) {
        $("#" + type).find('input[name=idele]').val('');//清空主键信息，避免新增被当作修改处理
        showAlertEle(ele_type, type);
        openalert(type, ele_id, title, ele_type);
    },
    addtable: function (type, ele_id, title, ele_type) {
        openalert(type, ele_id, title, ele_type);
    },
    editform: function (type, ele_id, title, ele_type) {
        type = 'addform';
        openalert(type, ele_id, title, ele_type);
        updDataShow(type, ele_id);
    },
    delform: function (type, ele_id) {
        var deltype = "";
        if (selectedEle != null && selectedEle.outerHTML.search('<table') !== -1)
            deltype = 'table';
        else
            deltype = 'form';
        $.ajax({
            url: '/dpage/delPageEle', async: true, data: {idele: ele_id, type: deltype}, type: "POST",
            success: function (res) {
                layer.msg('删除完成', function () {
                    window.location.reload();
                });
            },
            error: function (res) {
                console.log(res)
            }
        });
    },
    textcss: function (type, ele_id, title) {
        openalert(type, ele_id, title, updDataShow(type, ele_id));
    },
    cssstyle: function (type, ele_id, title) {
        openalert(type, ele_id, title, updDataShow(type, ele_id));
    },
    href: function (type, ele_id, title, ele_type) {
        if (ele_type == '10')
            window.open(window.location.href + '&preview=true');
        else if (ele_type == '11') {
            if (page_type != 1)
                $.ajax({
                    url: '/dpage/savePage',
                    async: false,
                    data: {idpage: getQueryString('idpage')}, type: "POST"
                });
            if (page_type == 4) {
                var content = $($("#optfile").find("form").html());
                content.find('td').find('span').find('span').remove();
                content.find('td').find('span').find('div').remove();
                content.find('td').find('span').each(function () {
                    $(this).find('span').remove();
                    $(this).find('div').remove();
                    var str = '', v = '';
                    $(this).children().each(function () {
                        if (v === $(this).attr('name').replace(/\[[\D\d]*\]/ig, '')) return;
                        v = $(this).attr('name').replace(/\[[\D\d]*\]/ig, '');
                        str += $(this).attr('name').replace(/\[[\D\d]*\]/ig, '') + ',';
                    });
                    $(this).parent().append('<div>').append(str).append('</div>');
                    //console.log($($(this).first().html()).attr('name'))
                });
                var lentd = $(content.find('table').find('tr')[0]).find('td').length;
                var str = '<tr>';
                for (var i = 0; i < lentd; i++) {
                    str += '<td><input type="checkbox" name="col" value="' + (i + 1) + '">第' + (i + 1) + '列</td>';
                }
                content.find('table').prepend(str + '</tr>');
                content.find('table').find('tr').each(function (index, ele) {
                    if (index === 0) $(ele).append('<td style="width: 200px;">条件</td>');
                    else {
                        $(ele).append('<td row="' + (index - 1) + '"><input name="row" class="conditionRow" type="text" style="width: 100%"></td>')
                    }
                });
                //条件取值填写还存在问题，当等于某个固定的字符串是可能会出错
                layer.open({
                    type: 1,
                    title: '选择需要保存列数据及条件（ <span style="color:red;font-weight: 900;">选择在评估结果中需要保存值的列以及评估结果的取值条件</span> ）',
                    area: ['1220px', '90%'],
                    content: '<div style="margin-top: 20px;"></div>' + content.html(),//'<div class="layui-form"><div id="calculatecon">'+$("#optfile").find("form").html()+"</div></div>",
                    btn: ['确定', '取消'],
                    yes: function (index, layero) {
                        layero = layero.find('table');
                        var col = '', row = '';
                        layero.find('input[name=col]').each(function () {
                            if (this.checked) col += "'" + this.value + "',";
                        });
                        layero.find('input[name=row]').each(function () {
                            if (this.value)
                                row += $(this).parent().attr('row') + '~' + this.value + ',';
                        });
                        $.ajax({
                            url: '/dpage/saveCondition',
                            method: 'POST',
                            data: {
                                idpage: getQueryString("idpage"),
                                col: col.substring(0, col.length - 1),
                                row: row.substring(0, row.length - 1)
                            },
                            success: function (res) {
                                layer.msg("保存成功", function () {
                                    layer.closeAll();
                                    callback();
                                });
                            },
                            error: function (res) {
                                layer.msg("保存失败", function () {
                                    layer.closeAll();
                                });
                            }
                        })
                    },
                    btn2: function (index, layero) {

                    }
                });
            } else
                layer.msg('保存完成', {icon: 1}, function () {
                    callback();
                });
        }
    }
};
function callback(){
    if (url == null || url === '') {
        if (self != top) {
            window.history.back();
        } else
            window.close();
    } else {
        $.ajax({
            url: url + (url.indexOf('?') === -1 ? "?" : "&") + "idpage=" + idpage,
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
}
//表格操作基础数据
window['tabledata'] = {
    tableobj: null,//当前表格对象
    opt: false,//是否可以选择单元格
    //单元格上右键菜单项及对应菜单项的执行方法
    rightMenu: [
        {
            id: 'editorText', text: '编辑文字', func: function () {
                var desc = '';
                $.ajax({
                    url: '/dpage/getTableCol',
                    async: false,
                    data: {idtable: tabledata.downElement.idtable,},
                    success: function (res) {
                        desc = res[0].showcontent;
                    }
                });
                layer.open({
                    type: 1,
                    content: '<div style="padding:20px 20px 0px 0px"><form class="layui-form" action="">' +
                        '<div class="layui-form-item">' +
                        '<label class="layui-form-label">显示文字</label>' +
                        '<div class="layui-input-block">' +
                        '<textarea name="desc" placeholder="请输入内容" class="layui-textarea" value="' + desc + '">' + desc + '</textarea>' +
                        '</div></div></form></div>',
                    area: ['450px', '250px'],
                    btn: ['确定', '取消'],
                    yes: function (index, ele) {
                        $.ajax({
                            url: '/dpage/updPageTable',//对同一个表的不同字段修改，可以直接就用一个接口
                            async: true,
                            data: {
                                rowspan: tabledata.downElement.rowspan,
                                colspan: tabledata.downElement.colspan,
                                tdrow: tabledata.downElement.row,
                                tdcol: tabledata.downElement.col,
                                idele: $(selectedEle).attr('ele_id'),
                                idtable: tabledata.downElement.idtable,
                                showcontent: ele.find('textarea[name=desc]').val()
                            },
                            type: "POST",
                            success: function (res) {
                                console.log(res);
                                if (res * 1 > 0) window.location.reload();
                                else layer.msg("保存失败");
                            },
                            error: function (res) {
                                console.log(res)
                            }
                        });
                    },
                    btn2: function (index, layero) {
                    }
                });
            }
        },
        {
            id: 'tableFormEle', text: '新增表单元素', func: function () {
                tableopenalert('tableFormEle', function (formele) {
                    var formid;
                    for (var i = 0; i < formele.length; i++) {
                        if (formele[i].name !== 'ele_id') continue;
                        formid = formele[i].value + (tabledata.downElement.formid ? ',' + tabledata.downElement.formid : '');
                    }
                    formele[formele.length] = {name: 'formid', value: formid};
                    formele[formele.length] = {name: 'page_table_id', value: tabledata.downElement.idtable};
                    formele[formele.length] = {name: 'rowspan', value: tabledata.downElement.rowspan};
                    formele[formele.length] = {name: 'colspan', value: tabledata.downElement.colspan};
                    formele[formele.length] = {name: 'tdrow', value: tabledata.downElement.row};
                    formele[formele.length] = {name: 'tdcol', value: tabledata.downElement.col};
                    formele[formele.length] = {name: 'idele', value: $(selectedEle).attr('ele_id')};
                    $.ajax({
                        url: '/dpage/insetTableEle',
                        async: false,
                        data: formele,
                        success: function (res) {
                            //console.log(res);
                            if (res * 1 > 0) window.location.reload();
                            else layer.msg("保存失败");
                        }
                    })
                });
                //删除ids中的当前弹窗中的元素id，避免做id重复性校验是不能输入当前已有元素的id
                $.ajax({
                    url: '/dpage/getTableCol',
                    async: false,
                    data: {idtable: tabledata.downElement.idtable,},
                    success: function (res) {
                        courrentId = res[0].ele_id;
                        delete ids[courrentId];
                        //在formid中去掉当前id
                        tabledata.downElement.formid.replace(eval('/,' + courrentId + '/ig'), '').replace(eval('/' + courrentId + ',/ig'), '').replace(eval('/' + courrentId + '/ig'), '');
                        form.val("tableFormEle", res[0]);
                    }
                })
            }
        },
        {
            id: 'merge', text: '合并', func: function () {
                var idele = $(selectedEle).attr("ele_id");
                var start = tabledata.downElement;
                var end = tabledata.upElement;
                var scol = start.col > end.col ? end.col : start.col;
                var srow = start.row > end.row ? end.row : start.row;
                var ecol = start.col > end.col ? start.col : end.col;
                var erow = start.row > end.row ? start.row : end.row;
                $.ajax({
                    url: '/dpage/tdMerge',
                    async: true,
                    data: {
                        scol: scol,
                        srow: srow,
                        ecol: ecol,
                        erow: erow,
                        col: ecol - scol + 1,
                        row: erow - srow + 1,
                        idele: idele,
                        formid: tabledata.downElement.formid,
                        showcontent: tabledata.downElement.text,
                        downtdid: tabledata.downElement.idtable
                    },
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'split', text: '完全拆分', func: function () {
                var data = {
                    row: tabledata.downElement.row,
                    col: tabledata.downElement.col,
                    idele: $(selectedEle).attr("ele_id"),
                    idtable: tabledata.downElement.idtable,
                    colspan: tabledata.downElement.colspan,
                    rowspan: tabledata.downElement.rowspan,
                    showcontent: tabledata.downElement.text
                };
                $.ajax({
                    url: '/dpage/tdBreak',
                    async: true,
                    data: data,
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'insertRow', text: '前插入行', func: function () {

                var data = option(tabledata.tableobj.find('td[tdrow=' + tabledata.downElement.row + ']:last-child'));
                data['idele'] = $(selectedEle).attr("ele_id");
                console.log(data);
                $.ajax({
                    url: '/dpage/insetrow',
                    async: true,
                    data: data,
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'insertCol', text: '前插入列', func: function () {
                var t = option(tabledata.tableobj.find('td[tdcol=' + tabledata.downElement.col + ']:last'));
                var data = tabledata.downElement;
                data['idele'] = $(selectedEle).attr("ele_id");
                data['row'] = t.row;
                console.log(data);
                $.ajax({
                    url: '/dpage/insetcol',
                    async: true,
                    data: data,
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'deleteRow', text: '删除行', func: function () {
                $.ajax({
                    url: '/dpage/delRowCol',
                    async: true,
                    data: {tdrow: tabledata.downElement.row, idele: $(selectedEle).attr("ele_id")},
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'deleteCol', text: '删除列', func: function () {
                $.ajax({
                    url: '/dpage/delRowCol',
                    async: true,
                    data: {tdcol: tabledata.downElement.col, idele: $(selectedEle).attr("ele_id")},
                    type: "POST",
                    success: function (res) {
                        console.log(res);
                        if (res * 1 > 0) window.location.reload();
                        else layer.msg("保存失败");
                    },
                    error: function (res) {
                        console.log(res)
                    }
                });
            }
        },
        {
            id: 'textcss', text: '文字样式', func: function () {
                tableopenalert('textcss');
                updTableStyle('textcss');
            }
        },
        {
            id: 'cssstyle', text: 'css内容样式', func: function () {
                tableopenalert('cssstyle');
                updTableStyle('cssstyle');
            }
        }
    ],
    downElement: null,//鼠标按下对应的元素,json格式，标记行列信息
    upElement: null,//鼠标松开对应的元素,json格式，标记行列信息
    previousElement: null,//当前记录的前一个td元素,json格式，标记行列信息
    merge: true,//可合并（右键菜单显示）
    break: true//可拆分（右键菜单显示）
};