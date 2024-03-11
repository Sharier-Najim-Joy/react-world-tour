
const CountryData = ({country ,handleVisitedCountries,handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Data</h4>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;