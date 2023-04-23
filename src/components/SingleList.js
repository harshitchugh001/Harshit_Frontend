import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
    index,
    isSelected,
    onClickHandler,
    onDeleteHandler,
    text,
}) => {
    return (
        <li
            style={{ backgroundColor: (isSelected) ? 'green' : 'red', padding: "25px", margin: "10px", width: "50vw", borderRadius: "10px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            onClick={() => onClickHandler(index)}
        >
            <span>{text}</span>
            <button onClick={() => onDeleteHandler(index)}>Delete</button>
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    onDeleteHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem;
