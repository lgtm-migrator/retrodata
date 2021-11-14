import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { queryUniversityList } from "./universities/services/queryUniversityList";
import { University } from "./universities/types/University";
import { UniversitiesList } from "./universities/UniversitiesList";
import { UniversityCreateDialog } from "./universities/UniversityCreateDialog";

export default function Home() {
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
        <Box sx={{ background: "#f0f0f0" }}>
            <Box display="flex" justifyContent="center" sx={{ my: 3 }}>
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
