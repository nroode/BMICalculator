
class BMIApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calcBMI = this.calcBMI.bind(this);

        this.state = {
            feet: '',
            inches: '',
            weight: '',
            BMI: '--',
            description: '',

        }
    }


    calcBMI() {
        const weight = parseInt(this.state.weight, 10);
        const totalInches = (parseInt(this.state.feet, 10) * 12) + parseInt(this.state.inches, 10);
        let BMIlong = (703 * weight) / (totalInches * totalInches)
        let BMI = (Math.round(BMIlong * 10) / 10).toFixed(1);

        let description = '';

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
            BMI, description
        });

    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

        // this.calcBMI();
    }


    handleSubmit(event) {
        event.preventDefault();
        this.calcBMI();

    }


    render() {

        return (
            <div>
                <div id="title">
                    <div id="heading">
                        <i className="far fa-heart"></i>
                        <div id="titles">
                            <h1>BMI</h1>
                            <h2>Calculator</h2>
                        </div>
                    </div>
                </div>

                <div id="BMICalculation">
                    {this.state.BMI}
                </div>
                <div id="BMIdescription">{this.state.description}</div>


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label id="weight" className="label">
                            Weight <span className="lbs">(lbs)</span>
                        </label>
                        <input     
                            type="number"
                            name="weight" 
                            required 
                            value={this.state.weight}
                            onChange={this.handleChange}>
                        </input>

                    </div>

                    <label id="height" className="label">
                        Height
                        </label>
                    <div id="heightFtIn">
                        <div className="feetInches ft">
                            <span className="metric">(ft)</span>
                            <input
                                type="number"
                                name="feet"
                                required 
                                value={this.state.feet}
                                onChange={this.handleChange}>
                            </input>
                        </div>

                        <div className="feetInches in">
                            <span className="metric">(in)</span>
                            <input
                                type="number"
                                name="inches"
                                required 
                                max="11" 
                                min="0"
                                value={this.state.inches}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>

                    <input id="submit" type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

var appRoot = document.getElementById('app');

ReactDOM.render(<BMIApp />, appRoot);



