import { FullBorrowerInfo} from "./Interfaces/Interfaces"

export function AddBorrower(data: FullBorrowerInfo) {
  /**
   * Add Borrower Info to database
   * Keep in mind it uses FullBorrowerInfoDefaults if nothing is selected 
   * in fields that aren't required
   */

  console.log("ADDING BORROWER")
  console.log(data)
}
export function EditBorrower(data: FullBorrowerInfo) {
  /**
   * Edit Borrower Info to database
   * Keep in mind it uses FullBorrowerInfoDefaults if nothing is selected 
   * in fields that aren't required
   */

  console.log("EDITING BORROWER")
  console.log(data)
}