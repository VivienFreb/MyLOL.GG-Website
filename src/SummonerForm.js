import React, { Component } from 'react'

import brand from "./brand.png"
import ApiRequest from "./ApiRequest";

import './SummonerForm.css'

const REGIONS = [
    {region:'EUW', val: "EUW1"},
    {region:'NA', val: "NA1"},
    {region:'BR', val: "BR1"},
    {region:'EUNE', val: "EUN1"},
    {region:'JP', val: "JP1"},
    {region:'LA', val: "LA1"},
    {region:'OC', val: "OC1"},
    {region:'RU', val: "RU"},
    {region:'TR', val: "TR1"}
];

class SummonerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summoner: '',
            region: 'EUW1',
            isValid: false
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = (event) => {
        this.setState({isValid: false});
        event.preventDefault();
        event.target.className += " was-validated";
        if(event.target.checkValidity()){
            this.setState({isValid: true})
        }
    };

    newSearch = () => {
        this.setState({
            isValid: false
        })
    };

    componentDidMount() {
        const jQuery = document.createElement('script');
        jQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"

        document.body.appendChild(jQuery)
        const bootstrap = document.createElement('script');
        bootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        document.body.appendChild(bootstrap);

    }

    render() {
        const { summoner, region, isValid } = this.state;
        return [
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="#">
                    <img src={brand}
                         height="35"
                         className="d-inline-block align-top"
                         alt="Logo MyLOL.GG"
                         onClick={this.newSearch}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="search-form form-inline my-2 my-lg-0 needs-validation" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="summoner"
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Enter your Summoner Name"
                                required
                                minLength="3"
                                maxLength="16"
                                value={this.state.summoner}
                            />
                        </div>

                        <div className="form-group">
                            <select
                                className="custom-select mr-sm-2"
                                id="region"
                                onChange={this.handleChange}
                            >
                                {REGIONS.map(({region, val}) => (
                                    <option key={region} value={val}>{region}</option>
                                ))}
                            </select>
                        </div>

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>,
            <div class="summonerContent">
                {isValid ? (
                    <ApiRequest summoner={summoner} region={region} />
                ) : (
                    <p className="presentationSite">Presentation du site Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor efficitur mi, non tempus libero mollis ut. Ut molestie vel felis convallis sodales. Donec faucibus nisi quis augue ullamcorper, in porttitor enim viverra. Pellentesque consectetur, eros at posuere varius, sem metus elementum diam, ut rutrum purus diam id neque. Aenean quis feugiat lectus. Aenean finibus lacus finibus pulvinar laoreet. Sed vel ex ac enim dictum placerat non ut libero.

                        Morbi sagittis nisi eu nisl congue scelerisque. Mauris eu feugiat est. Nullam vestibulum, justo ac rutrum mollis, augue risus molestie ex, sed semper mi eros sit amet ex. Fusce maximus lacus sit amet tortor accumsan, ut eleifend ipsum lacinia. Nulla ac nibh lacus. Praesent imperdiet placerat ipsum non lacinia. Donec eu metus id erat dapibus placerat.

                        Cras iaculis odio scelerisque dolor bibendum, vitae efficitur diam luctus. Maecenas lacinia aliquam tristique. Quisque condimentum, diam id tempus facilisis, mauris lorem egestas tortor, a tincidunt lacus tortor molestie odio. Nulla ex mauris, pellentesque quis efficitur maximus, aliquet ac arcu. Integer ac mollis eros, quis accumsan tortor. Aliquam efficitur suscipit fringilla. Vivamus pulvinar risus in ligula molestie sagittis. Praesent sit amet metus a mi ullamcorper mollis ut vestibulum lectus. Nunc sit amet erat at nunc tempus viverra. Nunc gravida id odio in vehicula. Nunc efficitur maximus consequat. In condimentum tellus ut urna congue auctor id vel turpis. Mauris congue egestas ipsum non bibendum.

                        Nullam accumsan dignissim risus a fermentum. Donec condimentum dui eros, quis posuere elit scelerisque ut. In pulvinar arcu vel purus suscipit iaculis et non felis. Nulla venenatis urna sed dolor vulputate scelerisque. Suspendisse ullamcorper a mauris quis gravida. Phasellus ultrices mi magna, sit amet pellentesque tortor tempor sed. Fusce a ex nec massa malesuada rutrum. Etiam sed lacus diam. Vestibulum ut libero imperdiet dolor pulvinar semper nec sed mi. Sed vel orci vitae ante gravida pulvinar ac facilisis ex. In sit amet est tristique, vehicula justo at, venenatis augue. Maecenas ante ipsum, placerat tristique ultricies sit amet, pulvinar accumsan urna.

                        Nam a arcu nunc. MLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor efficitur mi, non tempus libero mollis ut. Ut molestie vel felis convallis sodales. Donec faucibus nisi quis augue ullamcorper, in porttitor enim viverra. Pellentesque consectetur, eros at posuere varius, sem metus elementum diam, ut rutrum purus diam id neque. Aenean quis feugiat lectus. Aenean finibus lacus finibus pulvinar laoreet. Sed vel ex ac enim dictum placerat non ut libero.

                        Morbi sagittis nisi eu nisl congue scelerisque. Mauris eu feugiat est. Nullam vestibulum, justo ac rutrum mollis, augue risus molestie ex, sed semper mi eros sit amet ex. Fusce maximus lacus sit amet tortor accumsan, ut eleifend ipsum lacinia. Nulla ac nibh lacus. Praesent imperdiet placerat ipsum non lacinia. Donec eu metus id erat dapibus placerat.

                        Cras iaculis odio scelerisque dolor bibendum, vitae efficitur diam luctus. Maecenas lacinia aliquam tristique. Quisque condimentum, diam id tempus facilisis, mauris lorem egestas tortor, a tincidunt lacus tortor molestie odio. Nulla ex mauris, pellentesque quis efficitur maximus, aliquet ac arcu. Integer ac mollis eros, quis accumsan tortor. Aliquam efficitur suscipit fringilla. Vivamus pulvinar risus in ligula molestie sagittis. Praesent sit amet metus a mi ullamcorper mollis ut vestibulum lectus. Nunc sit amet erat at nunc tempus viverra. Nunc gravida id odio in vehicula. Nunc efficitur maximus consequat. In condimentum tellus ut urna congue auctor id vel turpis. Mauris congue egestas ipsum non bibendum.

                        Nullam accumsan dignissim risus a fermentum. Donec condimentum dui eros, quis posuere elit scelerisque ut. In pulvinar arcu vel purus suscipit iaculis et non felis. Nulla venenatis urna sed dolor vulputate scelerisque. Suspendisse ullamcorper a mauris quis gravida. Phasellus ultrices mi magna, sit amet pellentesque tortor tempor sed. Fusce a ex nec massa malesuada rutrum. Etiam sed lacus diam. Vestibulum ut libero imperdiet dolor pulvinar semper nec sed mi. Sed vel orci vitae ante gravida pulvinar ac facilisis ex. In sit amet est tristique, vehicula justo at, venenatis augue. Maecenas ante ipsum, placerat tristique ultricies sit amet, pulvinar accumsan urna.

                        Nam a arcu nunc. Morbi non tempor neque. Proin sit amet pulvinar risus. Curabitur iaculis libero non enim consequat, eget porta est vestibulum. Nam nibh est, fermentum eget tellus sed, venenatis elementum odio. Etiam ex tortor, convallis scelerisque magna aliquet, commodo pharetra metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu molestie purus. Sed dictum sapien id sem iaculis bibendum.orbi non tempor neque. Proin sit amet pulvinar risus. Curabitur iaculis libero non enim consequat, eget porta est vestibulum. Nam nibh est, fermentum eget tellus sed, venenatis elementum odio. Etiam ex tortor, convallis scelerisque magna aliquet, commodo pharetra metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu molestie purus. Sed dictum sapien id sem iaculis bibendum.</p>

                )}
            </div>,
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h6>About</h6>
                            <p class="text-justify">MyLOL.GG is a simple way to check your champion mastery progress and help you decide what champion you should go for.</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                                <a href="https://github.com/VivienFreb" target="_blank">VFreb</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        ];
    }
}

export default SummonerForm