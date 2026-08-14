export const hasSilverAccess = (user) => {
    const now = new Date();

    if (user?.plan === "Silver") {
        return (
            user?.premiumExpiry &&
            new Date(user.premiumExpiry) > now
        );
    }

    if (user?.plan === "Gold") {
        return (
            user?.goldExpiry &&
            new Date(user.goldExpiry) > now
        );
    }

    return false;
};

export const hasGoldAccess = (user) => {
    return (
        user?.plan === "Gold" &&
        user?.goldExpiry &&
        new Date(user.goldExpiry) > new Date()
    );
};