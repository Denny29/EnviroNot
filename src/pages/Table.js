import React, { useMemo } from "react";
import companies from "../assets/companies.json"

const Table = ({ companies }) => {
    return (
        <div className="table-container">
            {/* will create table dynamically later (it's my 3rd day using js/react, give me break) */}
          <table class="table">
            <thead class="table-light">
                <th scope="col">Rank</th>
                <th scope="col">Companies</th>
                <th scope="col">Total emissions (MtCO2e)</th>
                <th scope="col">CO2 emissions (MtCO2)</th>
                <th scope="col">Percentage of global CO2 emissions</th>
            </thead>
            <tbody class="table-dark table-striped-columns table-hover">
              <tr>
                <th scope="row">1</th>
                <td>Chevron</td>
                <td>57,898</td>
                <td>52,797</td>
                <td>3.0%</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ExxonMobil</td>
                <td>55,105</td>
                <td>49,537</td>
                <td>2.8%</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>BP</td>
                <td>42,530</td>
                <td>38,788</td>
                <td>2.2%</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Shell</td>
                <td>40,674</td>
                <td>36528</td>
                <td>2.1%</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>ConocoPhillips</td>
                <td>20222</td>
                <td>17916</td>
                <td>1.0%</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Peabody Coal Group</td>
                <td>17,735</td>
                <td>15,935</td>
                <td>0.9%</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>TotalEnergies</td>
                <td>17,584</td>
                <td>15,935</td>
                <td>0.9%</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Occidental Petroleum</td>
                <td>12,907</td>
                <td>9,903</td>
                <td>0.7%</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>BHP</td>
                <td>11,402</td>
                <td>9,903</td>
                <td>0.6%</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>CONSOL Energy</td>
                <td>10,490</td>
                <td>9,413</td>
                <td>0.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Table;