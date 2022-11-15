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
  const { length } = settingData;
  const tableData = Array(length);
  const accountCount: AccountCountType = {};
  accountData.forEach((item) => {
    const id = item.user_id;
    if (!accountCount[id]) {
      accountCount[id] = 1;
    }
    accountCount[id] += 1;
  });

  settingData.forEach((item, idx) => {
    const {
      id,
      name,
      email,
      birth_date,
      gender_origin,
      created_at,
      last_login,
      phone_number,
    } = userData[idx];
    const { is_active, allow_marketing_push, is_staff } = item;
    const maskedName = maskName(name);
    const account_count = accountCount[id];
    const maskedPhoneNumber = maskPhoneNumber(phone_number);
    const formattedItem: UserTableType = {
      id,
      name: maskedName,
      account_count,
      email,
      gender_origin,
      birth_date: formatDate(birth_date),
      phone_number: maskedPhoneNumber,
      last_login: formatDate(last_login),
      allow_marketing_push,
      is_active,
      created_at: formatDate(created_at),
      is_staff,
    };
    tableData[idx] = formattedItem;
  });
  return tableData;
}

export { formatTableData };
