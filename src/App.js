import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import kendoka from "./kendoka.svg";
import "./App.scss";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Input, TextArea } from "@progress/kendo-react-inputs";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import CalenderIcon from "./common/CalenderIcon";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import { FloatingLabel } from "@progress/kendo-react-labels";
import { dataProducts } from "./common/constants";

function App() {
  const editorId = "firstName";

  return (
    <div className="App">
      <div className="App">
        <div className="wrapper">
          <GridLayout rows={[1, 1]}>
            <GridLayoutItem className="top_header">
              <div className="display_flex">
                <div className="bold">Note Recievable</div>
                <div className="minimize_and_max_block">
                  <div className="bold_800">-</div>
                  <div className="bold_800">x</div>
                </div>
              </div>
            </GridLayoutItem>

            <GridLayoutItem>
              <div className="main_wrapper">
                <div className="icon_wrapper">
                  <CalenderIcon />
                  <CalenderIcon />
                </div>
                <div className="body_wrapper">
                  <div className="right_side">
                    <div className="input_block">
                      <FloatingLabel
                        label={"Loan No"}
                        editorId={editorId}
                        style={{ width: "30%" }}
                      >
                        <Input id={editorId} />
                      </FloatingLabel>

                      <DatePicker
                        placeholder={"Start Date"}
                        className="date_picker"
                        style={{ width: "20%" }}
                      />
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="Category"
                        data={dataProducts}
                        textField="productName"
                      />

                      <DatePicker
                        placeholder="Last Pmt"
                        className="date_picker"
                      />
                    </div>

                    <div className="text_area_block">
                      <div className="text_area_input">
                        <FloatingLabel
                          className={"k-textarea-container"}
                          label={"Description"}
                          editorId={"textarea-id"}
                        >
                          <TextArea id={"textarea-id"} />
                        </FloatingLabel>
                      </div>

                      <div className="input_amount_block">
                        <Input placeholder="Amount" className="" />
                        <Input placeholder="Interest Rate" className="" />
                      </div>
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="LoanTo"
                        data={dataProducts}
                        textField="productName"
                      />
                      <div className="dropdown">
                        <DropDownList
                          label="Frequency"
                          data={dataProducts}
                          textField="productName"
                          className="width_30"
                        />
                      </div>
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="Location"
                        data={dataProducts}
                        textField=""
                      />
                      <div className="dropdown">
                        <FloatingLabel label={"#Payments"} editorId={editorId}>
                          <Input id={editorId} />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="Assest Acct"
                        data={dataProducts}
                        textField="productName"
                        style={{ width: "30%" }}
                      />
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="Credit Acct"
                        data={dataProducts}
                        textField="productName"
                        style={{ width: "30%" }}
                      />
                    </div>

                    <div className="input_block">
                      <DropDownList
                        label="Income Acct"
                        data={dataProducts}
                        textField="productName"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>
                  <div className="left_side">
                    <div className="left_side_block">
                      <div className="payment_block">
                        <div>Payment</div>
                        <div className="bold_800 color_blue">
                          {new Number(9999999999).toLocaleString()}
                        </div>
                      </div>
                      <div className="payment_block">
                        <div>Balance</div>
                        <div className="bold_800 color_blue">
                          {" "}
                          {new Number(9999999999).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer_block">
                  <div className="footer_left_side">
                    <div className="footer_left_side_panel">
                      <div>
                        Created: <span className="color_blue">1/01/23</span>
                      </div>
                      <div>
                        User : <span className="color_blue">Mike</span>
                      </div>
                    </div>
                    <div className="footer_left_side_panel edited">
                      <div>
                        Edited: <span className="color_blue">1/01/23</span>
                      </div>
                      <div>
                        User : <span className="color_blue">Mike</span>
                      </div>
                    </div>
                  </div>
                  <div className="footer_right_side">
                    <Button className="save_btn">Save</Button>
                    <Button className="save_btn">Cancel</Button>
                  </div>
                </div>
              </div>
            </GridLayoutItem>
          </GridLayout>
        </div>
      </div>
    </div>
  );
}

export default App;
