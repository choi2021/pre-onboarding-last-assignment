import {
  AccountType,
  UserSettingType,
  UserTableType,
  UserType,
} from '../models/InfoTypes';
import { formatDate } from './formatDate';
import { maskName } from './maskName';
import { maskPhoneNumber } from './maskNumber';

type AccountCountType = {
  [index: string]: number;
};

function formatTableData(
  userData: UserType[],
  settingData: UserSettingType[],
  accountData: AccountType[]
) {
  const { length } = userData;
  const tableData = Array(length);
  const accountCount: AccountCountType = {};
  accountData.forEach((item) => {
    const id = item.user_id;
    if (!accountCount[id]) {
      accountCount[id] = 1;
    }
    accountCount[id] += 1;
  });
  userData.forEach((item, idx) => {
    const {
      id,
      name,
      email,
      birth_date,
      gender_origin,
      created_at,
      last_login,
      phone_number,
    } = item;
    const { is_active, allow_marketing_push } = settingData[idx];
    const maskedName = maskName(name);
    const account_count = accountCount[id];
    const formattedBirthDate = formatDate(birth_date);
    const maskedPhoneNumber = maskPhoneNumber(phone_number);
    const formattedItem: UserTableType = {
      id,
      name: maskedName,
      account_count,
      email,
      gender_origin,
      birth_date: formattedBirthDate,
      phone_number: maskedPhoneNumber,
      last_login,
      allow_marketing_push,
      is_active,
      created_at,
    };
    tableData[idx] = formattedItem;
  });
  return tableData;
}

export { formatTableData };