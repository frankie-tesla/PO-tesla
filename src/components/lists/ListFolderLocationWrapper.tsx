import DriveLocation from "./DriveLocation";
import { useDocumentLocationTypeContext } from "../../context/DocumentLocationTypeContext";
import { BaseRequest } from "../../apis/type";
import { Wrapper as LocationStyle, LiStyle } from "./DriveLocation";

type FolderTree = {
  fileId: string;
  fileName: string;
};

type Props = {
  setDriveRequestData: (data: BaseRequest) => void;
  driveRequestData: BaseRequest;
  docLocations: FolderTree[];
  setDocLocations: (folder: FolderTree[]) => void;
};

const ListFolderLocationWrapper = ({ setDriveRequestData, driveRequestData, docLocations, setDocLocations }: Props) => {
  const { type } = useDocumentLocationTypeContext();

  return (
    <>
      {location.pathname === "/" ? (
        <DriveLocation
          setDocLocations={setDocLocations}
          driveRequestData={driveRequestData}
          setDriveRequestData={setDriveRequestData}
          docLocations={docLocations}
        />
      ) : (
        <LocationStyle>
          <LiStyle>{type}</LiStyle>
        </LocationStyle>
      )}
    </>
  );
};

export default ListFolderLocationWrapper;
