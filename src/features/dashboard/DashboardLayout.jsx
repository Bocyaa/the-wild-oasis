import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const { stays, confirmedStays, isPending: isPending2 } = useRecentStays();

  if (isPending1 || isPending2) return <Spinner />;

  return <StyledDashboardLayout></StyledDashboardLayout>;
}

export default DashboardLayout;
