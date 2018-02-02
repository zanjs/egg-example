'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    // const { ctx, app } = this;
    // const pageSize = app.config.news.pageSize;
    // const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    // await this.ctx.render('news/list.tpl', { list: newsList, page, pageSize });
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
