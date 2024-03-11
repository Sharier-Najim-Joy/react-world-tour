import CountryData from "../CountryData/CountryData";

// const CountryDetail = ({country ,handleVisitedCountries,handleVisitedFlags}) => {
//     return (
//         <div>
//             <h4>Country Detail</h4>
//             <CountryData
//                 country={country}
//                 handleVisitedCountries={handleVisitedCountries}
//                 handleVisitedFlags={handleVisitedFlags}
//             ></CountryData>
//         </div>
        
//     );
// };

// another way to prop drilling
const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country Detail</h4>
            <CountryData {...props} ></CountryData>
        </div>
        
    );
};

export default CountryDetail;