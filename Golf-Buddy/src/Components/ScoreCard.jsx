import React from 'react';
import ScoreCardForm from './ScoreCardForm';

function ScoreCard() {



    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header"> Date </h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header"> Club </h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header"> Course </h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header"> Round Score </h3>
                    </th>
                </tr>

            </tbody>

        </table>
    );
}
export default ScoreCard;