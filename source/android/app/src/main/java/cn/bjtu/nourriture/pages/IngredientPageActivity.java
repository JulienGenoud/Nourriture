package cn.bjtu.nourriture.pages;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Ingredients;

/**
 * Created by Tagzz
 * on 26/12/15.
 */
public class IngredientPageActivity extends AppCompatActivity {

    private static final String TAG = "IngredientPageActivity";
    public static final String NAME = "GROUPS";
    private static String mTitle = null;
    Toolbar toolbar = null;

    @Override
    protected void onCreate(Bundle bundle){
        super.onCreate(bundle);
        setContentView(R.layout.ingredients_layout);
        hideactionbar();

        Ingredients ingredient = getIntent().getExtras().getParcelable(IngredientPageActivity.NAME);

        toolbar = (Toolbar) findViewById(R.id.ingredient_page_toolbar);
        toolbar.setTitleTextColor(Color.WHITE);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        getSupportActionBar().setTitle(ingredient.getName());

        if (ingredient.getDescription() != null) {
            ((TextView) findViewById(R.id.description)).setText(ingredient.getDescription());
        }

        if (ingredient.getFat() != null) {
            ((TextView) findViewById(R.id.fat)).setText(ingredient.getFat());
        }

        if (ingredient.getCarbohydrates() != null) {
            ((TextView) findViewById(R.id.carbohydrates)).setText(ingredient.getCarbohydrates());
        }

        if (ingredient.getProteins() != null) {
            ((TextView) findViewById(R.id.proteins)).setText(ingredient.getProteins());
        }


    }

    private void hideactionbar() {
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
}