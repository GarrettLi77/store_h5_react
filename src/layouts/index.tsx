import { Outlet } from 'umi';
import {bgColor} from "@/utils/constants";

export default function Layout() {
  return (
      <div style={{ backgroundColor: bgColor, height: '98vh' }}>
        <Outlet />
      </div>
  );
}
