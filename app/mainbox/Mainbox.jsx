var Header = require("../header/Header.jsx"),
    LeftMenu = require("../left/LeftMenu.jsx");

var Mainbox = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <Header></Header>
                <div>
                    <LeftMenu></LeftMenu>
                </div>
            </div>
        )
    }
});

module.exports = Mainbox;
