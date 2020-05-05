import React, {Component} from 'react';
import moment from "moment";
import { updateItem } from "../../../actions/itemsActions"
import PropTypes from "prop-types";
import {connect} from "react-redux";


class UpdateItemForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeEdititemname = this.onChangeEdititemname.bind(this);
        this.onChangeEdititemlocation = this.onChangeEdititemlocation.bind(this);
        this.onChangeEdititemtype = this.onChangeEdititemtype.bind(this);
        this.onChangeEdititemquantity = this.onChangeEdititemquantity.bind(this);
        this.onChangeEdititemdescription = this.onChangeEdititemdescription.bind(this);
        this.onChangeEdititemexp = this.onChangeEdititemexp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            itemname: '',
            itemlocation: '',
            itemtype: '',
            itemquantity: '',
            expirationdate: '',
            itemdescription: '',
        }
    }

    componentDidMount() {

    }

    onChangeEdititemname(e){
        this.setState({
            itemname: e.target.value
        });
    }

    onChangeEdititemlocation(e){
        this.setState({
            itemlocation: e.target.value
        });
    }

    onChangeEdititemtype(e){
        this.setState({
            itemtype: e.target.value
        });
    }

    onChangeEdititemquantity(e){
        this.setState({
            itemquantity: e.target.value
        });
    }

    onChangeEdititemexp(e){
        this.setState({
            expirationdate: e.target.value
        });
    }

    onChangeEdititemdescription(e){
        this.setState({
            itemdescription: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            itemname : this.state.itemname,
            itemlocation : this.state.itemlocation,
            itemtype : this.state.itemtype,
            itemquantity : this.state.itemquantity,
            expirationdate : this.state.expirationdate,
            itemdescription : this.state.itemdescription
        };
        const {dispatch} = this.props;
        dispatch(updateItem(obj));
        this.props.history.push('/dashboard')
    }

    render()
    {
        return(
            <div style={{marginTop: 25}}>
                <h3>Update Your Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.itemname}
                               onChange={this.onChangeEdititemname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Item Location: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.itemlocation}
                               onChange={this.onChangeEdititemlocation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Item Type: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.itemtype}
                               onChange={this.onChangeEdititemtype}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.itemquantity}
                               onChange={this.onChangeEdititemquantity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiration Date: </label>
                        <input type="text"
                               className="form-control"
                               value={moment(this.state.expirationdate).format('MM-DD-YYYY')}
                               onChange={this.onChangeEdititemexp}
                        />
                    </div>
                    <div className="form-group">
                        <label>Note </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.itemdescription}
                               onChange={this.onChangeEdititemdescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Item" className="btn btn-primary" onSubmit={this.onSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}


UpdateItemForm.propTypes = {
    updateItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { updateItem })(UpdateItemForm);