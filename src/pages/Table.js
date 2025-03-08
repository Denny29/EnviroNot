const Table = ({ companies }) => {
    return (
        <div class="d-flex align-content-end flex-column">
            <div class="d-flex justify-content-center text-center p-2 fs-4">
                These are enviroNOT's favorite companies — <br></br>
                these heroic organizations have done more to <br></br>
                DESTROY the environment than any other companies in history<br></br>
            </div>
        <div class="d-flex justify-content-center p-2">
        <div className="table-container">
            {/* will create table dynamically later (it's my 3rd day using js/react, give me break) */}
          <table class="table">
            <thead class="table-light">
                <th class="p-2" scope="col">Rank</th>
                <th class="p-2" scope="col">Companies</th>
                <th class="p-2" scope="col">Total emissions (MtCO2e)</th>
                <th class="p-2" scope="col">CO2 emissions (MtCO2)</th>
                <th class="p-2" scope="col">Percentage of global CO2 emissions</th>
            </thead>
            <tbody class="table-dark table-striped-columns table-hover">
              <tr>
                <th scope="row">1</th>
                <td>Chevron</td>
                <td class="text-center">57,898</td>
                <td class="text-center">52,797</td>
                <td class="text-center">3.0%</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ExxonMobil</td>
                <td class="text-center">55,105</td>
                <td class="text-center">49,537</td>
                <td class="text-center">2.8%</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>BP</td>
                <td class="text-center">42,530</td>
                <td class="text-center">38,788</td>
                <td class="text-center">2.2%</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Shell</td>
                <td class="text-center">40,674</td>
                <td class="text-center">36528</td>
                <td class="text-center">2.1%</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>ConocoPhillips</td>
                <td class="text-center">20222</td>
                <td class="text-center">17916</td>
                <td class="text-center">1.0%</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Peabody Coal Group</td>
                <td class="text-center">17,735</td>
                <td class="text-center">15,935</td>
                <td class="text-center">0.9%</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>TotalEnergies</td>
                <td class="text-center">17,584</td>
                <td class="text-center">15,935</td>
                <td class="text-center">0.9%</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Occidental Petroleum</td>
                <td class="text-center">12,907</td>
                <td class="text-center">9,903</td>
                <td class="text-center">0.7%</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>BHP</td>
                <td class="text-center">11,402</td>
                <td class="text-center">9,903</td>
                <td class="text-center">0.6%</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>CONSOL Energy</td>
                <td class="text-center">10,490</td>
                <td class="text-center">9,413</td>
                <td class="text-center">0.5%</td>
              </tr>
            </tbody>
            <tfoot>
            <a href="https://www.developmentaid.org/api/frontend/cms/file/2024/05/Carbon_Majors_Launch_Report.pdf">source</a>
            </tfoot>

          </table>
        </div>
        </div>
        </div>
    )
}

export default Table;