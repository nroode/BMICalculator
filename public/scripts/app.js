'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// every single time set state calc BMI

var BMIApp = function (_React$Component) {
    _inherits(BMIApp, _React$Component);

    function BMIApp(props) {
        _classCallCheck(this, BMIApp);

        var _this = _possibleConstructorReturn(this, (BMIApp.__proto__ || Object.getPrototypeOf(BMIApp)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.calcBMI = _this.calcBMI.bind(_this);

        _this.state = {
            feet: '',
            inches: '',
            weight: '',
            BMI: '--',
            description: ''

        };
        return _this;
    }

    _createClass(BMIApp, [{
        key: 'calcBMI',
        value: function calcBMI() {
            var weight = parseInt(this.state.weight, 10);
            var totalInches = parseInt(this.state.feet, 10) * 12 + parseInt(this.state.inches, 10);
            var BMIlong = 703 * weight / (totalInches * totalInches);
            var BMI = (Math.round(BMIlong * 10) / 10).toFixed(1);

            var description = '';

            if (BMI < 18.5) {
                description = 'Underweight';
            } else if (BMI >= 18.5 && BMI < 25) {
                description = ' Normal';
            } else if (BMI >= 25 && BMI < 30) {
                description = 'Overweight';
            } else if (BMI >= 30) {
                description = 'Obese';
            }

            this.setState({
                BMI: BMI
            });

            this.setState({
                description: description
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            this.calcBMI();
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { id: 'title' },
                    'BMI Calculator'
                ),
                React.createElement(
                    'div',
                    { id: 'BMICalculation' },
                    this.state.BMI
                ),
                React.createElement(
                    'div',
                    { id: 'BMIdescription' },
                    this.state.description
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'label',
                            { id: 'weight', className: 'label' },
                            'Weight (lbs)'
                        ),
                        React.createElement('input', {
                            type: 'number',
                            name: 'weight',
                            value: this.state.weight,
                            onChange: this.handleChange })
                    ),
                    React.createElement(
                        'label',
                        { id: 'height', className: 'label' },
                        'Height'
                    ),
                    React.createElement('input', {
                        type: 'number',
                        name: 'feet',
                        value: this.state.feet,
                        onChange: this.handleChange }),
                    React.createElement(
                        'span',
                        { className: 'metric' },
                        '(ft)'
                    ),
                    React.createElement('label', { id: 'inches' }),
                    React.createElement('input', {
                        type: 'number',
                        name: 'inches',
                        value: this.state.inches,
                        onChange: this.handleChange }),
                    React.createElement(
                        'span',
                        { className: 'metric' },
                        '(in)'
                    ),
                    React.createElement('input', { id: 'submit', type: 'submit', value: 'Submit' })
                )
            );
        }
    }]);

    return BMIApp;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(BMIApp, null), appRoot);
