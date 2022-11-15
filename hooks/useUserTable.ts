import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useInfo } from './useInfo';
import { formatTableData } from '../utils/formatTableData';
import {
  UserTableDispatchContext,
  UserTableStateContext,
} from '../context/UserTableContext';

export function useUserTableState() {
  const state = useContext(UserTableStateContext);
  if (!state) throw new Error('Cannot find UserTablestateProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useUserTableDispatch() {
  const dispatch = useContext(UserTableDispatchContext);
  if (!dispatch) throw new Error('Cannot find UserTableDispatchProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}

export const useFormatUserTable = () => {
  const router = useRouter();
  const { q } = router.query;
  const query = typeof q === 'string' ? q : q?.join('');
  const dispatch = useUserTableDispatch();
  const infoService = useInfo();
  const { data: userData } = useQuery(['users'], () => {
    return infoService?.getUsers(1);
  });
  const { data: settingData } = useQuery(['userSetting'], () => {
    return infoService?.getUserSetting(1);
  });
  const { data: allAccountData } = useQuery(['accounts', 'all'], () => {
    return infoService?.getAllAccounts();
  });

  const { data: targetUser } = useQuery(['user', query], () => {
    return infoService?.getTargetUser(query);
  });
  const { data: allUserSetting } = useQuery(['usersetting', 'all'], () => {
    return infoService?.getAllUserSetting();
  });

  useEffect(() => {
    if (!q) {
      if (userData && settingData && allAccountData) {
        const formattedTableData = formatTableData(
          userData,
          settingData,
          allAccountData
        );
        dispatch({ type: 'SET_DATA', data: formattedTableData });
      }
    }
  }, [q, userData, settingData, allAccountData]);

  useEffect(() => {
    if (q) {
      if (targetUser && allUserSetting && allAccountData) {
        const targetUUIDS = targetUser?.map((item) => item.uuid);
        const targetUserSetting = targetUUIDS?.map((uuid) => {
          const target = allUserSetting?.find(
            (setting) => setting.uuid === uuid
          );
          if (!target) {
            throw new Error('not matched setting');
          }
          return target;
        });
        const formattedTableData = formatTableData(
          targetUser,
          targetUserSetting,
          allAccountData
        );
        dispatch({ type: 'SET_DATA', data: formattedTableData });
      }
    }
  }, [q, targetUser, allUserSetting, allAccountData]);
};
