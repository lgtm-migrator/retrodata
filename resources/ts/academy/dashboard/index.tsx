import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { queryUniversityList } from "../../common/universities/queryUniversityList";
import { UniversitiesList } from "../../common/universities/UniversitiesList";
import { University } from "../../common/universities/University";
import { UniversityCreateDialog } from "../../common/universities/UniversityCreateDialog";

export function Dashboard() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [universities, setUniversities] = useState<University[]>([]);

    const refresh = () => {
        queryUniversityList().then((res) => {
            setUniversities(res.data);
        });
    };

    useEffect(() => {
        refresh();
    }, []);

    return (
        <Box sx={{ background: blueGrey[100], p: 3 }}>
            <Box display="flex" justifyContent="center" sx={{ mb: 3 }}>
                <Button
                    size="large"
                    variant="contained"
                    onClick={() => setOpen(true)}
                    startIcon={<AddIcon />}
                >
                    {t("Create University")}
                </Button>
            </Box>
            <UniversityCreateDialog
                open={open}
                onClose={() => setOpen(false)}
                onSuccess={() => refresh()}
            />
            <UniversitiesList universities={universities} />
        </Box>
    );
}
