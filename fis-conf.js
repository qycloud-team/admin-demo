fis.config.set('project.fileType.text', 'jsx');
fis.config.set('project.exclude', "_/**");
fis.config.set('modules.parser.jsx', 'react');
fis.config.set('roadmap.ext.jsx', 'js');
fis.config.set("query", new Date().valueOf());
fis.config.set('livereload.hostname', '127.0.0.1');
fis.config.set('project.charset', 'utf8');
fis.config.set("seajs", {
    base: "./sea-modules/"
});
fis.config.set("pack", {});

fis.config.set("roadmap.path", [
    {
        reg: /^\/sea-modules\/(.*)\.(js|coffee|less|css|properties|bcmap|cur)$/i,
        isMod: false,
        useSprite: false,
        useOptimizer: false,
        id: '$1',
        url: '/admin/sea-modules/$1.$2',
        release: '/admin/sea-modules/$1.$2'
    },
    {
        reg: /^\/sea-modules\/(.*)\.(json|swf)$/i,
        isMod: false,
        useSprite: false,
        release: '/admin/sea-modules/$1.$2'
    },
    {
        reg: /^\/app\/(.*)\.(js|jsx|coffee|less|css)$/i,
        //是组件化的，会被jswrapper包装
        isMod: true,
        useSprite: false,
        //id是去掉sea-modules和.js后缀中间的部分
        id: 'app/$1',
        isHtmlLike: true,
        isJsLike: true,
        url: '/admin/sea-modules/app/$1.$2',
        release: '/admin/app/$1.$2'
    },
    {
        reg: /\/pages\/(.*)\.html/i,
        isMod: false,
        useMap: false,
        useCache: false,
        release: '/admin/$1.html'
    },
    {
        reg: '/assets/css/less/*.less',
        release: false
    },
    {
        reg: '/assets/img/**',
        useOptimizer: false,
        useSprite: false,
        release: '/admin/$&'
    },
    {
        reg: '/assets/js/**',
        useOptimizer: false,
        release: '/admin/$&'
    },
    {
        reg: '/assets/**',
        isMod: false,
        useMap: false,
        release: '/admin/$&'
    },
    {
        reg: '**.md',
        release: false
    },
    {
        reg: "**",
        release: "/admin/$&"
    }
]);
