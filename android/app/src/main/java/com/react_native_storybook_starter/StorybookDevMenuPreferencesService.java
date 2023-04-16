package com.react_native_storybook_starter;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class StorybookDevMenuPreferencesService {
    private static final String STORYBOOK_ENABLED_KEY = "storybook-enabled-dev-menu-item";

    public static boolean isStorybookEnabled(Context context) {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(context);
        return preferences.getBoolean(STORYBOOK_ENABLED_KEY, false);
    }

    public static void toggleStorybookFlag(Context context) {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(context);
        boolean storybookEnabled = preferences.getBoolean(STORYBOOK_ENABLED_KEY, false);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putBoolean(STORYBOOK_ENABLED_KEY, !storybookEnabled);
        editor.apply();
    }
}
