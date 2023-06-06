import PropTypes from 'prop-types';
function Property(props) {
return (
    <>
         <a href="#">hell this</a>
         <p >the above is the new movie : {props.abouttext}</p>
         <img src="./logo.svg"/>
    </>
);

}
Property.defaultProps = {
    title:'set title',
    abouttext:'no'
};
export default Property;