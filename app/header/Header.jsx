var React = require("react");

var Header = React.createClass({
    render: function () {
        return (
            <div className="navbar-inner custom-header row-fluid">
                <div className="container-fluid span3">
                    <a className="brand custom-brand header-logo" href="#index">
                        <img className="logo-img"
                            ng-hide="currentEnt.txtLogo"
                            src="../../assets/img/commons/logo.png"/>
                        <span className="logo-txt" ng-show="currentEnt.txtLogo">currentEnt.entName</span>
                    </a>
                </div>
                <div className="span9 text-right row-right">
                    <div className="border-cell user-info">
                        <img className="img-avatar img-circle" ng-src="currentUser.icon|usericon:currentUser.gender"/>
                        name
                        <span>$root.currentUser | displayName</span>
                    </div>
                    <div className="border-cell hide-private">
                        <a ng-href="constants.getBuyUrl()" target="_blank"> 购买中心</a>
                    </div>
                    <div className="border-cell hide-private">
                        <a href="http://www.oatos.com/help" target="_blank"> 帮助</a>
                    </div>
                    <div className="sign-out"
                        ng-click="signOut()">
                        <i className="icon-custom-buy-exit"></i>
                        安全退出
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Header;