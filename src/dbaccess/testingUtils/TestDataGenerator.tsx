import { ArchivedPayments, FullBorrowerInfo, PaymentInfo, PersonalInfo } from "../Interfaces/Interfaces"
import { faker } from "@faker-js/faker"

export function GenerateFullBorrowerInfo(count: number): (FullBorrowerInfo)[] {
  var borrowers: (FullBorrowerInfo)[] = []

  do {
    var borrowerPayments: (PaymentInfo)[] = GeneratePayment(15)
    var borrowerPersonalInfo: (PersonalInfo)[] = GenerateBorrower(1)

    var borrower: (FullBorrowerInfo) = {
      ...borrowerPersonalInfo[0],

      loanid: faker.datatype.uuid(),
      principal: faker.datatype.float({ min: 1000, max: 10000 }),
      interest: faker.datatype.number({ min: 1, max: 3 }),
      term: faker.datatype.number({ min: 1, max: 12 }),
      paymentperperiod: faker.datatype.float({ min: 100, max: 1000 }),
      startdate: faker.datatype.datetime().toISOString().split('T')[0],
      frequency: "Monthly",
      commissioner: faker.name.fullName(),
      commissioninterest: faker.datatype.number({ min: 1, max: 3 }),

      payments: borrowerPayments,
    }
    borrowers.push(borrower)
  } while (borrowers.length < count)

  return borrowers
}

export function GenerateArchivedPayments(maxCount: number): (ArchivedPayments)[] {
  var archivedPayments: (ArchivedPayments)[] = []

  for (let i = 1; i < faker.datatype.number({ min: 2, max: maxCount + 2 }); i++) {
    archivedPayments.push({
      ...GenerateBorrower(1)[0],
      ...GeneratePayment(1)[0]
    })
  }

  return archivedPayments
}

export function GenerateBorrower(maxCount: number): (PersonalInfo)[] {
  var borrowerInfo: (PersonalInfo)[] = []
  for (let i = 1; i < faker.datatype.number({ min: 2, max: maxCount + 2 }); i++) {
    borrowerInfo.push({
      borrowerid: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.streetAddress(),
      province: faker.address.county(),
      postalCode: faker.address.zipCode(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      comments: faker.lorem.paragraph(),
    })
  }

  return borrowerInfo
}

export function GeneratePayment(maxCount: number): (PaymentInfo)[] {
  var borrowerPayments: (PaymentInfo)[] = []
  for (let i = 1; i < faker.datatype.number({ min: 2, max: maxCount + 2 }); i++) {
    borrowerPayments.push({
      paymentID: faker.datatype.uuid(),
      paymentdate: faker.datatype.datetime().toISOString().split('T')[0],
      paymentval: faker.datatype.float({ min: 100, max: 1000 }),
      paymentstatus: faker.datatype.boolean()
    })
  }

  return borrowerPayments
}
